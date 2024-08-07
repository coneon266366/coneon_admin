import React from "react";
import "./Sidebar.css";
import logo from "../../assets/coneonlogo.svg";

interface tabsProps {
  title: string;
  image: string;
  imageA: string;
}

interface SidebarProps {
  tabs: tabsProps[];
  getIsActive: (i: number) => boolean;
  handleSelect: (i: number) => void;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { tabs, getIsActive, handleSelect } = props;

  return (
    <>
      <div className="sidebar">
        <img src={logo} alt="coneon logo" style={{ objectFit: "contain" }} />
        <div className="sidebar-alignOptions">
          {tabs.map((tab, index) => {
            const isActive = getIsActive(index);
            return (
              <div
                key={index}
                className="sidebar-option"
                style={
                  isActive
                    ? { backgroundColor: "#2E4C7E", color: "#fff" }
                    : { backgroundColor: "#fff", color: "#878787" }
                }
                onClick={() => handleSelect(index)}
              >
                <img
                  src={isActive ? tab.imageA : tab.image}
                  alt="icon"
                  className="sidebar-icon"
                />
                <div className="sidebar-title">{tab.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
