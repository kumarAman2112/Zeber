import Sidebar from "../sidebar";
import GroupsIcon from "@mui/icons-material/Groups";
import CategoryIcon from "@mui/icons-material/Category";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import TelegramIcon from "@mui/icons-material/Telegram";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import "./dashboard.css";
import Barchart from "../Chart/barchart";
import PieChart from "../Chart/piechart";
import DonutChart from "../Chart/donutchart";
const Dashboard = () => {
  return (
    <>
      <div className="dashboardSidebar">
        <Sidebar />
      </div>
      <div className="dashboardRightbar">
        <div className="dashboardRightbarChild1">
          <div className="dashboardRightbarChild1Top">
            <div className="dashboardRightbarChild1TopContent">
              <h3 style={{ color: "rgb(38,0,128)" }}>Congratulations Aman</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae saepe non{" "}
              </p>
              <div className="badgeButton">VIEW BADGES</div>
            </div>
            <div className="dashboardRightbarChild1TopImgContainer">
              <img
                src="https://static.vecteezy.com/system/resources/previews/004/807/905/original/a-man-works-on-a-laptop-the-guy-is-sitting-at-the-table-with-a-laptop-flat-style-good-for-image-work-office-hiring-staff-illustration-vector.jpg"
                alt=""
                className="dashboardRightbarChild1TopImg"
              />
            </div>
          </div>
          <div className="dashboardRightbarChild1Middle">
            <Barchart/>
            </div>
          <div className="dashboardRightbarChild1Bottom">
            <div className="dashboardRightbarChild1Bottom1">
              <h3  style={{
                  textAlign: "center",
                  color: "rgb(38,0,128)",
                  fontWeight: 600,
                  fontSize:'16px'
                }}>Total News/Articles Read</h3>
              <div style={{ display: "flex", justifyContent: "center" }}><NewspaperIcon style={{ color: "rgb(38,0,128)",fontSize:'24px' }} /></div>
              <h4 style={{ textAlign: "center", color:"rgb(38,0,128)",fontWeight:600 }}>78</h4>
            </div>
            <div className="dashboardRightbarChild1Bottom2">
              <PieChart/>
            </div>
          </div>
        </div>
        <div className="dashboardRightbarChild2">
          <div className="dashboardRightbarChild2Top">
            <div className="dashboardRightbarChild2Top1">
              <h3
                style={{
                  textAlign: "center",
                  color: "rgb(38,0,128)",
                  fontWeight: 600,
                  fontSize:'14px'
                }}
              >
                All Users
              </h3>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <GroupsIcon style={{ color: "rgb(38,0,128)" }} />
              </div>
              <h4 style={{ textAlign: "center", color:"rgb(38,0,128)",fontWeight:600   }}>134567</h4>
            </div>
            <div className="dashboardRightbarChild2Top2">
              <h3
                style={{
                  textAlign: "center",
                  color: "rgb(38,0,128)",
                  fontWeight: 600,
                  fontSize:'14px'
                }}
              >
                Categories
              </h3>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <CategoryIcon style={{ color:"rgb(38,0,128)" }} />
              </div>
              <h4 style={{ textAlign: "center",color:"rgb(38,0,128)",fontWeight:600 }}>7</h4>
            </div>
          </div>
          <div className="dashboardRightbarChild2Middle">
            <div className="dashboardRightbarChild2MiddleChild">
              <div className="dashboardRightbarChild2MiddleChild1">
                <h3
                  style={{
                    textAlign: "center",
                    color: "rgb(38,0,128)",
                    fontWeight: 600,
                    fontSize:'14px'
                  }}
                >
                  Total Likes
                </h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <FavoriteIcon style={{ color:"rgb(38,0,128)" }} />
                </div>
                <h4 style={{ textAlign: "center", color: "rgb(38,0,128)",fontWeight:600  }}>120</h4>
              </div>
              <div className="dashboardRightbarChild2MiddleChild2">
                <h3
                  style={{
                    textAlign: "center",
                    color: "rgb(38,0,128)",
                    fontWeight: 600,
                    fontSize:'14px'
                  }}
                >
                  Total Comments
                </h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CommentIcon style={{ color:"rgb(38,0,128)"}} />
                </div>

                <h4 style={{ textAlign: "center", color:"rgb(38,0,128)",fontWeight:600  }}>90</h4>
              </div>
            </div>
            <div className="dashboardRightbarChild2MiddleChild3">
              <h3  style={{
                    textAlign: "center",
                    color: "rgb(38,0,128)",
                    fontWeight: 600,
                    fontSize:'16px'
                  }}>Total Shared Posts</h3>
                   <div style={{ display: "flex", justifyContent: "center" }}>
                  <TelegramIcon style={{ color:"rgb(38,0,128)"}} />
                </div>
                  <h4 style={{ textAlign: "center", color: "rgb(38,0,128)",fontWeight:600 }}>50</h4>
            </div>
          </div>
          <div className="dashboardRightbarChild2Bottom">
            <div className="dashboardRightbarChild2Bottom1">
              <DonutChart/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
