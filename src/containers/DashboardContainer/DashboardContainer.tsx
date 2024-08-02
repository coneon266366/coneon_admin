import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import icon1 from "../../assets/home outlined 1.svg";
import icon1a from "../../assets/home outlined 2.svg";
import icon2 from "../../assets/user outlined 1.svg";
import icon2a from "../../assets/user outlined 2.svg";
import icon3 from "../../assets/shopping-bag 1.svg";
import icon3a from "../../assets/shopping-bag 2.svg";
import icon4 from "../../assets/user outlined 1.svg";
import icon5 from "../../assets/cart outlined 1.svg";
import icon5a from "../../assets/cart outlined 2.svg";
import HeaderContainer from "../../shared/containers/HeaderContainer/HeaderContainer";

interface tabsProps {
  title: string;
  image: string;
  imageA: string;
}

const DashboardContainer: React.FC = () => {
  const tabs: tabsProps[] = [
    { title: "Dashboard", image: icon1, imageA: icon1a },
    { title: "Users", image: icon2, imageA: icon2a },
    { title: "Products", image: icon3, imageA: icon3a },
    { title: "Vendors", image: icon4, imageA: icon2a },
    { title: "Orders", image: icon5, imageA: icon5a },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleSelect = (i: number) => {
    setSelectedIndex(i);
  };

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-left">
          <Sidebar
            tabs={tabs}
            selectedIndex={selectedIndex}
            handleSelect={handleSelect}
          />
        </div>
        <div className="dashboard-right">
          <HeaderContainer />
        </div>
      </div>
    </>
  );
};

export default DashboardContainer;
