import React from "react";
import "./Header.css";
import searchLogo from "../../../assets/search logo.svg";
import notification from "../../../assets/notification.svg";
import userIcon from "../../../assets/user icon.svg";

const Header: React.FC = () => {
  return (
    <>
      <div className="header">
        <p className="header-title">Dashboard</p>
        <div className="header-right">
          <input type="text" className="header-search" placeholder="search" />
          <img
            className="header-search-logo"
            src={searchLogo}
            alt="search-logo"
          />
          <div className="header-seperator"></div>
          <img src={notification} alt="notification-logo" />

          <img src={userIcon} alt="user-icon" className="header-userIcon" />
        </div>
      </div>
    </>
  );
};

export default Header;
