import "./post.css";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TelegramIcon from "@mui/icons-material/Telegram";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { format } from "timeago.js";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import { useState } from "react";
// import CommentModal from "./commentModal/commentModal";
import BasicCommentModal from "./Modal/comment.modal";
import BasicSocialShareModal from "./Modal/socialShare.modal";

export default function Post(props) {
  const [showSocialShare, setShowSocialShare] = useState(false);
  const [handleSocialShareOpen, setHandleSocialShareOpen] = useState(false);
  const [showComments, setShowComments] = useState(0);
  const [isFollowed, setIsFollowed] = useState(false);
  const [issaved, setIsSaved] = useState(props.post.isSaved);
  const [open, setOpen] = useState(false);
  // const [postUrl, setPostUrl] = useState("");
  const handleSocialShareClose = () => {
    setShowSocialShare((prev) => !prev);
    setHandleSocialShareOpen(false);
  };

  const handleSocialShare = () => {
    setShowSocialShare((prev) => !prev);
    setHandleSocialShareOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setShowComments((prev) => !prev);
  };
  const userId = "66ce18d463106fd96982f201";

  const handleComments = () => {
    setShowComments((prev) => !prev);
    setOpen(true);
  };

  const handleFollow = () => {
    setIsFollowed(!isFollowed);
    if (isFollowed) {
      document.getElementById(props.id).style.color = "#1877f2";

      document.getElementById(props.id).innerHTML = "follow";
    } else {
      document.getElementById(props.id).style.color = "green";

      document.getElementById(props.id).innerHTML = "following";
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const postId = props.id;
    const res = await axios.put(`/api/v1/posts/post/${postId}/save`);

    console.log(res.data.data.isSaved);
    if (res.data.data.isSaved) {
      setIsSaved(true);
    } else setIsSaved(false);
  };

  const AddLike = async () => {
    const postId = props.id;
    await axios.put(`/api/v1/posts/post/${postId}/addlike`, { userId });
    if (props.isFromSaved) props.fetchPosts();
  };
  const RemoveLike = async () => {
    await axios.put(`/api/v1/posts/post/${props.id}/removelike`, { userId });
    if (props.isFromSaved) props.fetchPosts();
  };

  return (
    <div className="post">
      <div className="postwrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="" alt="" />
            <span className="postUsername"></span>
            <span className="postDate">{format(props.post.createdAt)}</span>
            <span className="postFollow" id={props.id} onClick={handleFollow}>
              follow
            </span>
          </div>
          <div className="postTopRight">
            {issaved ? (
              <BookmarkIcon
                htmlColor="#164863"
                id={props.id + "save"}
                onClick={handleSave}
              />
            ) : (
              <BookmarkBorderIcon
                className="saved"
                id={props.id + "save"}
                onClick={handleSave}
              />
            )}
          </div>
        </div>
        <div className="postCenter">
          <span className="posttext">{props.post.desc}</span>
          <img src={props.post.img} alt="" className="postimg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {props.post.likes.includes(userId) ? (
              <FavoriteIcon
                htmlColor="crimson"
                className="postlikeicon"
                onClick={RemoveLike}
              />
            ) : (
              <FavoriteBorderIcon
                htmlColor="black"
                className="postlikeicon"
                onClick={AddLike}
              />
            )}
            <span className="postlikecounter">{props.post.likes.length}</span>
            <TelegramIcon
              className="postshareicon"
              onClick={handleSocialShare}
            />
            {showSocialShare ? (
              <BasicSocialShareModal
                id={props.id}
                handleClose={handleSocialShareClose}
                open={handleSocialShareOpen}
              />
            ) : (
              ""
            )}
          </div>
          <div className="postBottomRight">
            <ModeCommentOutlinedIcon
              htmlColor="black"
              className="postcommenticon"
              onClick={handleComments}
            />
            <span className="postcommenttext">
              {props.post.comments.length} comments
            </span>
          </div>
        </div>
        {showComments ? (
          <BasicCommentModal
            Img={props.post.img}
            id={props.id}
            handleClose={handleClose}
            open={open}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
