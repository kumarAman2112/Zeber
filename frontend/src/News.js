import Sidebar from "./Components/sidebar";
import Feed from "./Components/feed";
import Rightbar from "./Components/rightbar";
import Dashboard from "./Components/Dashboard/dashboard";
import Saved from "./Components/saved/save";
import {Routes,Route} from 'react-router-dom';
import './News.css';
function News() {
  return (
   <>
   <div className='newsContainer'>
   <Routes>
            <Route path='/' element={<><Sidebar/><Feed/><Rightbar/></>}></Route>
            <Route path='/newsDashboard' element={<Dashboard/>}></Route>
            <Route path='/saved' element={<Saved/>}></Route>
   </Routes>
        
        </div>
   </>
  );
}

export default News;
