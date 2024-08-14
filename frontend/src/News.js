import Sidebar from "./Components/sidebar";
import Feed from "./Components/feed";
import Rightbar from "./Components/rightbar";

import './News.css';
function News() {
  return (
   <>
   <div className='newsContainer'>
   
         <Sidebar/>
         <Feed/>
         <Rightbar/>
        </div>
   </>
  );
}

export default News;
