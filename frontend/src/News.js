import Sidebar from "./Components/sidebar";
import Feed from "./Components/feed";
import Rightbar from "./Components/rightbar";
// import Dashboard from "./Components/Dashboard/dashboard";
import './News.css';
function News() {
  return (
   <>
   <div className='newsContainer'>
   
   {/* <Dashboard/> */}
         <Sidebar/>
         <Feed/>
         <Rightbar/>
        </div>
   </>
  );
}

export default News;
