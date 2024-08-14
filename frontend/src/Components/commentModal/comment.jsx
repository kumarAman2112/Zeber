import "./comment.css";
import CommentForm from "./commentForm";
const Comment = ({ comment, replies,activeComment,setActiveComment,addComment,parentId=null }) => {
  const isReplying=activeComment && activeComment.type==="replying" && activeComment.id===comment.id
  const replyId=parentId ?parentId:comment.id
  return (
    <div className="comment">
      <div className="comment-image-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8kVrRKvn48kDPt79Je7wZIuT6nUSr3l5DQ&s"
          alt=""
          className="comment-profile"
        ></img>
      </div>
      <div className="comment-rightpart">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div className="comment-time">{comment.createdAt}</div>
        </div>

        <div className="comment-text">{comment.body}</div>
        <div className="comment-actions">
          <div className="comment-action" onClick={()=>setActiveComment({"id":comment.id,"type":"replying"})}>Reply</div>
        </div>
        {isReplying && <CommentForm SubmitLabel="Reply" handleSubmit={addComment} replyId={replyId}/>}
        {replies.length > 0 && (
          <div className="comment-reply">
            {replies.map((reply) => (
              <Comment comment={reply} key={reply.id} replies={[]} addComment={addComment} parentId={parentId} activeComment={activeComment} setActiveComment={setActiveComment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Comment;
