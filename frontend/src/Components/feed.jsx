import { useState, useEffect } from "react";
import "./feed.css";
import Share from "./share";
import Post from "./post";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://api.unsplash.com/search/photos?page=1&query=office&client_id=a3-FKqr6cdxSGjZXNU8iyKSEuVr5NpOx8X4Buw0qWZE"
      );
      setPosts(res.data.results);
    };
    fetchPosts();
  }, []);
   const HandleTrending = async () => {
    const res = await axios.get(
      "https://api.unsplash.com/search/photos?page=1&query=trending&client_id=a3-FKqr6cdxSGjZXNU8iyKSEuVr5NpOx8X4Buw0qWZE"
    );
    setPosts(res.data.results);
    document.getElementById("optionItem1").style.borderBottom = "2px solid gray";
    document.getElementById("optionItem2").style.borderBottom = ""
    document.getElementById("optionItem1").style.borderRight = "none"
   }
    const HandleLatest = async () => {
      const res = await axios.get(
        "https://api.unsplash.com/search/photos?page=1&query=latest&client_id=a3-FKqr6cdxSGjZXNU8iyKSEuVr5NpOx8X4Buw0qWZE"
      );
      setPosts(res.data.results);
      document.getElementById("optionItem2").style.borderBottom = "2px solid gray";
      document.getElementById("optionItem1").style.borderBottom = ""
      document.getElementById("optionItem1").style.borderRight = 'none'
    }
  return (
    <div className="feed">
      <div className="feedwrapper">
        <Share />
        <div className="optionWrapper">
          <div className="optionItem" id="optionItem1" onClick={HandleTrending}>Trending</div>
          <div className="optionItem" id="optionItem2" onClick={HandleLatest}>Latest</div>
        
        </div>
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};
export default Feed;
