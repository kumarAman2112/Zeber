import "./sidebar.css";
import { NewspaperOutlined } from "@mui/icons-material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CategoryIcon from "@mui/icons-material/Category";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
          <div className="ProfileTop">
            <img src="/assets/aman.jpg" alt="" className="ProfileImg" />
            <h2>Aman Kumar</h2>
          </div>
          <hr style={{ marginBottom:12 }} />
          <li className="sidebarlistitem">
            <DashboardIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">Dashboard</span>
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
            <span className="sidebarlistitemtext">Categories</span>
          </li>
          <li className="sidebarlistitem">
            <BookmarkIcon />
            <span className="sidebarlistitemtext">Saved</span>
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
