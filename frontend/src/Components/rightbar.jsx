import "./rightbar.css";
import axios from "axios";
import { useEffect, useState } from "react";
import TrendingNews from "./trendingnews";
// import Post from './post'
const Rightbar = () => {
  const [Trendingnews, setTrendingNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=c3529205a4f14c158b2d47b592c63ab4"
      );
      setTrendingNews(res.data.articles);
    };
    fetchNews();
  }, []);
  return (
    <>
      <div className="rightbarContainer">
        <div className="rightbarTop">
          <h3>Ads and Sponsers</h3>
          <hr />
          <div className="adsConatiner">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZGzt53VaS2g6gpCGFwp8Aj2J-WJAfMRoEXYk8Zbf7qbMir2osxJOafqSwSKouRQpzshE&usqp=CAU"
            alt=""
            className="ads"
          ></img>
          </div>
         
        </div>
        <div className="rightbarBottom">
          <h3>Trending News</h3>
          <hr />
          <div className="trendingNews">
            {Trendingnews?.map((n) => (
              <TrendingNews news={n} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Rightbar;
