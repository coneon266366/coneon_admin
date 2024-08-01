import React from "react";
import "./Sidebar.css";
import logo from "../../assets/coneonlogo.svg";

interface tabsProps {
  title: string;
  image: string;
}

interface SidebarProps {
  tabs: tabsProps[];
  selectedIndex: number;
  handleSelect: (i: number) => void;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { tabs, selectedIndex, handleSelect } = props;

  return (
    <>
      <div className="sidebar">
        <img src={logo} alt="coneon logo" />
        <div className="sidebar-alignOptions">
          {tabs.map((tab, index) => {
            return (
              <div
                key={index}
                className="sidebar-option"
                style={
                  selectedIndex === index
                    ? { backgroundColor: "#2E4C7E", color: "#fff" }
                    : { backgroundColor: "#fff", color: "#878787" }
                }
                onClick={() => handleSelect(index)}
              >
                <img src={tab.image} alt="icon" className="sidebar-icon" />
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
