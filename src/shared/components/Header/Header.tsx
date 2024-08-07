import React from "react";
import "./Header.css";
import searchLogo from "../../../assets/headerImages/search logo.svg";
import notification from "../../../assets/headerImages/notification.svg";
import userIcon from "../../../assets/headerImages/user icon.svg";

interface HeaderProps {
  pageTitle: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { pageTitle } = props;
  return (
    <>
      <div className="header">
        <p className="header-title">{pageTitle}</p>
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
