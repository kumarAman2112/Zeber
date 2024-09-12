import "./sidebar.css";
import { NewspaperOutlined } from "@mui/icons-material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CategoryIcon from "@mui/icons-material/Category";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
          <div className="ProfileTop">
            <img src="ak.jpg" alt="xyz" className="ProfileImg" />
            <h2 style={{  color: '#164863'}}>Aman Kumar</h2>
          </div>
          <hr style={{ marginBottom:12 }} />
          <li className="sidebarlistitem">
            <DashboardIcon className="sidebaricon" />
            <span className="sidebarlistitemtext"><Link to='/newsDashboard' style={{color:"#164863",textDecoration:"none"}} >Dashboard</Link></span>
          </li>
          <li className="sidebarlistitem">
            <TrendingUpIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">Trending</span>
          </li>
          <li className="sidebarlistitem">
            <NewspaperOutlined className="sidebaricon" />
            <span className="sidebarlistitemtext">News</span>
          </li>
          <li className="sidebarlistitem">
            <CategoryIcon />
            <label htmlFor='newsCategories' className="categ">Categories
            <select className="categOption"   id="newsCategories">
              <option value="hiddenVal"></option>
              <option value="Technology">Technology</option>
              <option value="Sports">Sports</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Business">Business</option>
            </select>
            </label>
          </li>
          <li className="sidebarlistitem">
            <BookmarkIcon />
            <span className="sidebarlistitemtext"><Link to='/saved' style={{color:"#164863",textDecoration:"none"}} >Saved</Link></span>
          </li>
          <li className="sidebarlistitem">
            <NotificationsIcon />
            <span className="sidebarlistitemtext">Notification</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
