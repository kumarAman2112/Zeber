import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/apiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/apiResponse.js"
import jwt from "jsonwebtoken"
// import mongoose, { mongo } from "mongoose"


const generateAccessTokenAndgenerateRefreshToken=async(userId)=>{
                 const user=await User.findById(userId)
                const accessToken= await user.generateAccessToken();
                const refreshToken=await user.generateRefreshToken();
                user.refreshToken=refreshToken;
                user.save({validateBeforeSave:false});
                return {refreshToken,accessToken}
}

 const registerUser=asyncHandler(async(req,res)=>{


       // Get User details from frontend
       //Validation
       // Check if User already exists or not::username,email
       //check for profilePic
       // upload that on cloudinary
       // create user object for data entry in db
       // remove password and refresh token from response
       // check for user creation
       //return response

       const {fullName,email,password}=req.body
       if([fullName,email,password].some((field)=>field?.trim()===""))
        {
            throw new ApiError(400,"All fields are mandatory to be filled")
        }
       const isUserExist=await User.findOne({
        $or:[ {fullName} , {email} ]
       })
       if(isUserExist)
        {
            throw new ApiError(409,"User with email or username already Exists")
        }
      

       
    //    const coverImageLocalPath= req.files?.coverImage[0]?.path



  let profilePicLocalPath;
if (req.files && Array.isArray(req.files.profilePic) && req.files.profilePic.length>0) {
    profilePicLocalPath=req.files.profilePic[0].path
}

    
       const profilePic=await uploadOnCloudinary(profilePicLocalPath)

       if (!profilePic) {
        throw new ApiError(400,"coverImage is not uploaded on Cloudinary")
       }
       const user=await User.create({
        fullName:fullName,
        password:password,
        email:email,
        profilePic:profilePic?.url||""
       })
       const createdUser=await User.findById(user._id).select(
        "-password -refreshToken"
       )
       if (!createdUser) {
        throw new ApiError(500,"Internal server Error")
       }
       return res.status(201).json(
        new ApiResponse(201,createdUser,"User Is Registered Successfully")
       )

 })

const loginUser=asyncHandler(async(req,res)=>{
           // get user email and password
           // check whether the user exists in db or not with the help of - email
           //if yes then confirm the password by matching user given password and password of db 
           // if matches then generate a refresh token and allow user to enter the website
           // send cookie

           const {email,password}=req.body
           if(!email)
            {
                throw new ApiError(400,"username or email is required")
            }
           const user=await User.findOne({email:email})
            if(!user)
                {
                    throw new ApiError(404,"User doesn't exist")
                }
            const isPasswordMatch= await user.isPasswordCorrect(password)
            if(!isPasswordMatch)
                {
                    throw new ApiError(400,"password is incorrect");
                }
           const {refreshToken,accessToken}=await generateAccessTokenAndgenerateRefreshToken(user._id)
           const loggedInUser=await User.findById(user._id).select("-password -refreshToken")
           const options={
            httpOnly:true,
            secure:true
           }
           return res.status(200).cookie("accessToken",accessToken,options).cookie("refreshToken",refreshToken,options).json(
            new ApiResponse(200,{user:loggedInUser},"User Successfully loggedIn")
           )

})

const logoutUser=asyncHandler(async(req,res)=>{
             await User.findByIdAndUpdate(req.user._id,{
                $set:{refreshToken:null},
               
             }, {
                new:true
            })
            const options={
                httpOnly:true,
                secure:true
               }
               res.status(200).clearCookie("accessToken",options).clearCookie("refreshToken",options).json(new ApiResponse(200,{},"user logged out successfully"))
            
})

const refreshAccessToken=asyncHandler(async(req,res)=>{
    const incomingRefreshToken=req.cookies.refreshToken||req.body.refreshToken
    if(!incomingRefreshToken)
        throw new ApiError(401,"unauthorized request")
    const decodedToken=jwt.verify(incomingRefreshToken,process.env.REFRESH_TOKEN_SECRET)
    const user=await User.findById(decodedToken?._id)
    if(!user)
        throw new ApiError(401,"Invalid refresh token")
    if(incomingRefreshToken!==user.refreshToken)
        throw new ApiError(401,"refresh token is expired or used")
    const {newRefreshToken,accessToken}=await generateAccessTokenAndgenerateRefreshToken(user._id)
    const options={
        httpOnly:true,
        secure:true
    }
    return res.status(200).cookie('accessToken',accessToken,options).cookie('refreshToken',newRefreshToken,options).json(new ApiResponse(200,{accessToken,refreshToken:newRefreshToken},"new access token is generated successfully"))
})

const changeCurrentPassword=asyncHandler(async(req,res)=>{
    try{
           const {oldPassword,newPassword}=req.body;
           const user=await User.findById(req.user?._id)
           if(!user)
            throw new ApiError(400,"unauthorized User")
         const isPasswordCorrect=  await user.isPasswordCorrect(oldPassword)
           if(!isPasswordCorrect)
            throw new ApiError(401,"Invalid User")
            user.password=newPassword
            await user.save({validateBeforeSave:false})
            return res.status(200).json(new ApiResponse(200,{},"Password changed successfully"));

    }catch(err){
               throw new ApiError(500,"Internal Server error")
    }
})

const getCurrentUser=asyncHandler(async(req,res)=>{
    return res.status(200).json(new ApiResponse(200,req.user,"current user fetched"))
})

const updateAccountDetails=asyncHandler(async(req,res)=>{
    try{
             const {fullName,email}=req.body;
            const user= await User.findByIdAndUpdate(req.user?._id,{
                $set:{
                    fullName:fullName,
                    email:email
                }
             },{new:true}).select('-password -refreshToken')
             return res.status(200).json(new ApiResponse(200,user,"account details updated successfully"))
    }catch(err){
throw new ApiError(500,"Internal Server Error")
    }
})

// const updateUserAvatar=asyncHandler(async(req,res)=>{
//     try{
//                const avatarLocalPath=req.file?.path
//                if(!avatarLocalPath)
//                 throw new ApiError(400,"avatar file is missing")
//                const avatar=await uploadOnCloudinary(avatarLocalPath);
//                if(!avatar.url)
//                 throw new ApiError(400,'avatar file is required')
//            const user= await User.findByIdAndUpdate(req.user?._id,{
//                 $set:{avatar:avatar.url}
//             },{new:true}).select("-password -refreshToken")
//             return res.status(200).json(new ApiResponse(200,user,"Avatar is updated successfully"))

//     }catch(err)
//     {
//   throw new ApiError(500,"Internal Server error")
//     }
// })

// const updateUserCoverImage=asyncHandler(async(req,res)=>{
// try{
//           const coverImageLocalPath=req.file?.path
//           if(!coverImageLocalPath)
//             throw new ApiError(400,"coverImage is missing")
//           const coverImage=await uploadOnCloudinary(coverImageLocalPath)
//           if(!coverImage.url)
//             throw new ApiError(400,"coverImage is missing")
//           const user=await User.findByIdAndUpdate(req.user?._id,{
//             $set:{coverImage:coverImage.url}
//           },{new:true}).select("-password -refreshToken")
//           return res.status(200).json(new ApiResponse(200,user,"coverImage is updated successfully"))
// }catch(err)
// {
//     throw new ApiError(500,"Internal server error")
// }
// })



 export {registerUser,loginUser,logoutUser,refreshAccessToken,changeCurrentPassword,getCurrentUser,updateAccountDetails}