import { useState } from "react";
import './commentForm.css'
const CommentForm=({SubmitLabel,handleSubmit,replyId})=>{
    const [text,setText]=useState("");
    const onSubmit=(e)=>{
           e.preventDefault();
           handleSubmit(text,replyId);
           setText("")
    }
    return(
        <form className='comment-form' onSubmit={onSubmit}>
            <textarea className='comment-form-textarea' placeholder='Write your comments here...' value={text} onChange={(e)=>setText(e.target.value)}/>
            <button className='comment-form-button'>{SubmitLabel}</button>
            </form>
    )
}
export default CommentForm;