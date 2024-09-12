import express from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser,changeCurrentPassword,getCurrentUser,updateAccountDetails} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { jwtAuthMiddleware } from "../middlewares/auth.middleware.js";
const router=express.Router()

router.route("/register").post(
    upload.fields([
        {
            name:"profilePic",
            maxCount:1
        },
    ]),
    registerUser
)
router.route("/login").post(loginUser)
router.route("/logout").post(jwtAuthMiddleware,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/updated-password").post(jwtAuthMiddleware,changeCurrentPassword)
router.route("/current-user").get(jwtAuthMiddleware,getCurrentUser)
router.route("/update-userAccount").patch(jwtAuthMiddleware,updateAccountDetails)
// router.route("/avatar").patch(jwtAuthMiddleware,upload.single("avatar"),updateUserAvatar)
// router.route("/cover-image").patch(jwtAuthMiddleware,upload.single("coverImage"),updateUserCoverImage)
// router.route("/channel/:username").get(jwtAuthMiddleware,getUserChannelProfile)
// router.route("/watch-history").get(jwtAuthMiddleware,getUserWatchHistory)
export default router