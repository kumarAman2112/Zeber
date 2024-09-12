import Barchart from "../Chart/linechart";
import FollowerBarchart from "../Chart/followersChart";
import "./dashboard.css";
import PieChart from "../Chart/piechart";
import DonutChart from "../Chart/donutchart";
import { NewspaperOutlined } from "@mui/icons-material";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboardWrapper">
        <div className="dashboardLeft">
          <div className="dashboardLeftContainer">
            <div className="dashboardProfileImgContainer">
              <img src="ak.jpg" alt="" className="dashboardProfileImg"></img>
            </div>
            <div className="dashboardProfileName">Aman Kumar</div>
            <div
              style={{ color: "grey", marginTop: ".2rem", fontSize: "16px" }}
            >
              Software Engineer
            </div>
            <div className="dashboardProfileDetailsContainer">
              <div className="dashboardProfileDetails">
                <span style={{ fontWeight: 600, fontSize: "1.2rem" }}>12</span>
                <span style={{ color: "grey" }}>Posts</span>
              </div>
              <div className="dashboardProfileDetails">
                <span style={{ fontWeight: 600, fontSize: "1.2rem" }}>124</span>
                <span style={{ color: "grey" }}>Followers</span>
              </div>
              <div className="dashboardProfileDetails">
                <span style={{ fontWeight: 600, fontSize: "1.2rem" }}>120</span>
                <span style={{ color: "grey" }}>Following</span>
              </div>
            </div>
            <div className="activityContainer">
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  marginLeft: "1.5rem",
                  color:'#02397e'
                }}
              >
                Activity
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="dashboardRight">
               <div className="dashboardRightTop">
                <div className="dashboardRightTopChild">
                  <DonutChart/>
                </div>
                <div className="dashboardRightTopChild">
                  <div style={{fontSize:'1rem',fontWeight:700,marginBottom:'1rem',marginTop:'1rem',color:'#02397e'}}>Total Articles/News Read</div>
                  <NewspaperOutlined style={{fontSize:'2rem',color:'crimson'}}/>
                  <h3 style={{color:'#02397e',fontWeight:700
                  }}>67</h3>
                </div>
                <div className="dashboardRightTopChild"><PieChart/></div>
               </div>
               <div className="dashboardRightMiddle">
                    <div className="dashboardRightMiddleChild1">
                      <div style={{color:'#02397e',fontWeight:700,fontSize:'1rem',marginBottom:'.5rem'}}>Top Followers</div>
                   <div className="topFollowers">
                    <span><img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg" alt="" className="topFollowersImg"></img></span>
                    <span><img src="https://www.afponline.org/images/default-source/default-album/certification_scholarship_tab_v2.jpg?sfvrsn=8b39e16b_0" alt="" className="topFollowersImg"/></span>
                    <span><img src="https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid" alt="" className="topFollowersImg"/></span>
                    <span><img src="https://static.vecteezy.com/system/resources/previews/038/974/578/non_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" alt="" className="topFollowersImg"/></span>
                   </div>
                   <div className="topFollowers">
                    <span><img src="https://i.pinimg.com/736x/78/6e/e3/786ee3a0699273545b72a02ca444a233.jpg" alt="" className="topFollowersImg"></img></span>
                    <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyY1GNPvwOG6gLB1STlbWivP1NZdw6wKn3VBXPOWEDH05_Pl-Yv4AhmA-g-aE7eu7aGk&usqp=CAU" alt="" className="topFollowersImg"/></span>
                    <span><img src="https://static.vecteezy.com/system/resources/thumbnails/028/287/529/small/indian-man-with-crossed-arms-wearing-a-formal-shirt-ai-generated-photo.jpg" alt="" className="topFollowersImg"/></span>
                    <span><img src="https://femina.wwmindia.com/content/2021/sep/women-thumb1632797644.jpg" alt="" className="topFollowersImg"/></span>
                   </div>
                    </div>
                    <div className="dashboardRightMiddleChild2">
                      <FollowerBarchart/>
                    </div>
                    
               </div>
               <div className="dashboardRightBottom">
                    <div className="dashboardRightBottomChild1">
                      <div className="dashboardLikes">
                        <span style={{color:'white',marginTop:'.5rem'}}>6458</span>
                        <span style={{color:'white',marginBottom:'.5rem'}}>New Likes</span>
                      </div>
                      <div  className="dashboardComments">
                      <span style={{color:'white',marginTop:'.5rem'}}>6458</span>
                      <span style={{color:'white',marginBottom:'.5rem'}}>New Comments</span>
                      </div>
                      <div  className="dashboardShared">
                      <span style={{color:'white',marginTop:'.5rem'}}>78</span>
                      <span style={{color:'white',marginBottom:'.5rem'}}>Shared</span>
                      </div>
                    </div>
                    <div className="dashboardRightBottomChild2">
                      <Barchart/>
                    </div>
                    
               </div>
          </div>
      </div>
    </div>
  );
};
export default Dashboard;
