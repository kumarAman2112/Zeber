import "./post.css";
import { ModeComment } from "@mui/icons-material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TelegramIcon from "@mui/icons-material/Telegram";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import Comments from "./commentModal/comments";

export default function Post(props) {
  const [countlikes, setCountlike] = useState(props.post.likes);
  const [showComments, setShowComments] = useState(0);
  const likesHandler = () => {
    setCountlike(countlikes + 1);
    document.getElementById("like").style.color = "crimson";
  };
  const handleComments =()=>{
   setShowComments(!showComments);
   console.log(showComments)
  }
  return (
    <div className="post">
      <div className="postwrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={props.post.user.profile_image.large}
              alt=""
            />
            <span className="postUsername">{props.post.user.username}</span>
            <span className="postDate">5 mins</span>
          </div>
          <div className="postTopRight">
           
            <BookmarkBorderIcon className="saved" />
          </div>
        </div>
        <div className="postCenter">
          <span className="posttext">{props.post.description}</span>
          <img src={props.post.links.download} alt="" className="postimg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <FavoriteBorderIcon
              htmlColor="black"
              className="postlikeicon"
              id='like'
              onClick={likesHandler}
            />
            <span className="postlikecounter">{countlikes}</span>
            <TelegramIcon className="postshareicon" />
          </div>
          <div className="postBottomRight" >
            <ModeComment htmlColor="green" className="postcommenticon" onClick={handleComments}/>
            <span className="postcommenttext">9 comments</span>
          </div>

        </div>
        {showComments?<Comments currentUserId='1'/>:''} 
      </div>
    </div>
  );
}
