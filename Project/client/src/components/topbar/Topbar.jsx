import "./topbar.css";
import { Search , Chat , NotificationAdd} from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import Message from "../message/Message"
import {Link} from "react-router-dom";
import {useState} from "react";
import { render } from "@testing-library/react";
function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">BOSONS</span>
      </div>
      <div className="topbarCentre">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends , photos ,videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
          <div className="topbarLinks">
              <span className="topbarLink">Homepage</span>
              <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
              <div className="topbarIconItems">
                  <PersonIcon />
                  <span className="topbarItembadge">1</span>
              </div>
              <Link to ="/messenger" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <div className="topbarIconItems" id="mess" > 
                  <Chat />
                  <span className="topbarItembadge">2</span>
              </div>
              </Link>
              <div className="topbarIconItems">
                  <NotificationAdd />
                  <span className="topbarItembadge">3</span>
              </div>
          </div>
      </div>
      <img src="/assets/person/main.jpg" className="topbarImg" alt=""/>
    </div>
  );
}
export default Topbar;
