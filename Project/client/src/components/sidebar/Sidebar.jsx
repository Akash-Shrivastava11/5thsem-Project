import "./sidebar.css";
import { HelpOutline, InsertChartOutlinedOutlined, RssFeed, VideoSettingsOutlined, WorkOutline } from "@mui/icons-material"
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import {Link} from "react-router-dom";
function Sidebar()
{
    return(
        <div className="sideBar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItems">
                    <RssFeed className="sidebarItem"/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItems">
                <Link to = "/messenger" style={{textDecoration:"inherit", color:"inherit"}}>
                    <ChatIcon className="sidebarItem"/>
                    <span className="sidebarListItemText">Chat</span>
                    </Link>
                </li>
                
                <li className="sidebarListItems">
                    <VideoSettingsOutlined className="sidebarItem"/>
                    <span className="sidebarListItemText">Videos</span>
                    
                </li>
                <li className="sidebarListItems">
                    <GroupIcon className="sidebarItem"/>
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItems">
                    <RssFeed className="sidebarItem"/>
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>    
                    <li className="sidebarListItems">
                    <HelpOutline className="sidebarItem"/>
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItems">
                    <WorkOutline className="sidebarIcon"/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItems">
                    <SchoolIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img className="sidebarfriendImg" src ="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Abhishek</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarfriendImg" src ="/assets/person/3.jpeg" alt=""/>
                    <span className="sidebarFriendName">Bharath</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarfriendImg" src ="/assets/person/4.jpg" alt=""/>
                    <span className="sidebarFriendName">Riya</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarfriendImg" src ="/assets/person/5.jpg" alt=""/>
                    <span className="sidebarFriendName">Shine</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarfriendImg" src ="/assets/person/3.jpeg" alt=""/>
                    <span className="sidebarFriendName">Bharath</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarfriendImg" src ="/assets/person/5.jpg" alt=""/>
                    <span className="sidebarFriendName">Shine</span>
                </li>
            </ul>
        </div>
        </div>
    );
}
export default Sidebar