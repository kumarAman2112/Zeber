import {useEffect,useState} from 'react'
import {getComments as getCommentApi,createComment as createCommentApi} from './commentApi'
import Comment  from './comment'
import CommentForm from './commentForm'
import './comments.css'
const Comments=({currentUserId})=>{
    const [backendComments,setBackendComments]=useState([]);
    const [activeComment,setActiveComment]=useState(null);
    const rootComments=backendComments.filter((comment)=>comment.parentId===null);
       useEffect(
        ()=>{
              getCommentApi().then((data)=>{
                  setBackendComments(data);
              })
        },[]
       );
       const getReplies=(commentId)=>{
              return backendComments.filter((backendcomment)=>backendcomment.parentId===commentId).sort((a,b)=>new Date(a.createdAt).getTime()-new Date(b.createdAt).getTime());
       }
       const addComment=(text,parentId)=>{
        console.log(text,parentId)
         createCommentApi(text,parentId).then(comment=>setBackendComments([comment,...backendComments]))
         setActiveComment(null)
       }
    return(
        <div className='comments'>
            <h3 className='comments-title'> Comments</h3>
            <CommentForm SubmitLabel="Post" handleSubmit={addComment}  />
            <div className='comments-container'>
                 {rootComments.map((rootComment)=>(<Comment key={rootComment.id} comment={rootComment} replies={getReplies(rootComment.id)} activeComment={activeComment} setActiveComment={setActiveComment} addComment={addComment} />))}
                 
            </div>
        </div>
    )
};
export default Comments;