import ClipLoader from "react-spinners/ClipLoader";

import { Box, Button } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import CommentList from "./commentList";
import { io } from "socket.io-client";
import UILoader from "../Skeleton/uiLoader";

const override = {
  display: "block",
  margin: "0 auto",
};
const socket = io("/", {
  reconnection: true,
});

const CommentModal = (props) => {
  const[isCommentLoading,setIsCommentLoading] = useState(0);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [commentsRealTime, setCommentsRealTime] = useState([]);
  const userId = "66ce18d463106fd96982f201";

  const fetchComments = async () => {
    try {
      setIsCommentLoading(1);
      const res = await axios.get(`/api/v1/posts/post/${props.id}`);
      //    console.log(res.data.data.comments);/
      setComments(res.data.data.comments.sort((a, b) => new Date(b.created) - new Date(a.created)));
      setIsCommentLoading(0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  },[]);

  useEffect(() => {
    // console.log('SOCKET IO', socket);
    socket.on("new-comment", (newComment) => {
      setCommentsRealTime(newComment);
    });
  }, []);

  // add comment
  const addComment = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.put(
        `/api/v1/posts/post/${props.id}/comment`,
        { comment, userId }
      );

      if (data.success === true) {
        setComment("");

        socket.emit("comment", data.data.comments);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  let uiCommentUpdate =
    commentsRealTime.length > 0 ? commentsRealTime : comments;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflowY: "scroll",
        overflowX: "hidden",
        backgroundColor: "white",
      
      }}
    >
      {isCommentLoading ?<UILoader width={400}/>
      :<>{uiCommentUpdate.map((comment) => (
        <CommentList
          key={comment._id}
          name={""} // loggedIn user name will be displayed
          createdAt={comment.created}
          text={comment.text}
        />
      ))}</>
    }
      

      {1 ? (
        <>
          <Box sx={{ pt: 1, pl: 3, pb: 3, bgcolor: "white" }}>
            <h2>Add your comment here</h2>
            <form onSubmit={addComment}>
              <textarea
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                placeholder="Add a comment..."
                style={{
                  width: "95%",
                  outline: "none",
                  border: "none",
                  borderBottom: "2px solid gray",
                  resize: "none",
                }}
              />
              <Box sx={{ pt: 1 }}>
                {loading ? (
                  <ClipLoader
                    color="#286ff3"
                    loading="true"
                    cssOverride={override}
                    size={25}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  <Button type="submit" variant="contained">
                    Comment
                  </Button>
                )}
              </Box>
            </form>
          </Box>
        </>
      ) : (
        <>
          <Link to="/"> Log In to add a comment</Link>
        </>
      )}
    </div>
  );
};

export default CommentModal;
