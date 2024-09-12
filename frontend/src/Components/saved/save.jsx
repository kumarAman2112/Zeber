import "./save.css";
import { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import axios from "axios";
import Post from "../post";

const Saved = () => {
  const [savedPost, setSavedPost] = useState([]);
  const [isFromSaved, setIsFromSaved] = useState(true);
  console.log(setIsFromSaved)
  const fetchPost = async () => {
    try {
      const res = await axios.get("/api/v1/posts/post");

      const posts = res.data.data;
      const savedPosts = posts.filter((post) => post.isSaved === true);

      setSavedPost(savedPosts.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt)
      }
        ));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="save">
      <div className="saveWrapper">
        <div className="saveLeft">
          <Sidebar />
        </div>
        <div className="saveRight">
          <div className="saveRightWrapper">
            {savedPost.map((p) => (
              <Post key={p._id} id={p._id} post={p} fetchPosts={fetchPost} isFromSaved={isFromSaved} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Saved;
