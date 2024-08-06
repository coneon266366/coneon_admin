import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import icon1 from "../../assets/sidebarImages/home outlined 1.svg";
import icon1a from "../../assets/sidebarImages/home outlined 2.svg";
import icon2 from "../../assets/sidebarImages/user outlined 1.svg";
import icon2a from "../../assets/sidebarImages/user outlined 2.svg";
import icon3 from "../../assets/sidebarImages/shopping-bag 1.svg";
import icon3a from "../../assets/sidebarImages/shopping-bag 2.svg";
import icon4 from "../../assets/sidebarImages/user outlined 1.svg";
import icon5 from "../../assets/sidebarImages/cart outlined 1.svg";
import icon5a from "../../assets/sidebarImages/cart outlined 2.svg";
import icon6 from "../../assets/sidebarImages/logout.svg";
import icon6a from "../../assets/sidebarImages/logout (1).svg";
import HeaderContainer from "../../shared/containers/HeaderContainer/HeaderContainer";
import { useLocation, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { routesArr } from "../../Routes/Routes";
import {
  Dashboard,
  Home,
  Orders,
  Products,
  Users,
  Vendors,
} from "../../Routes/Constants";

interface tabsProps {
  title: string;
  image: string;
  imageA: string;
}

interface RouteProps {
  component: React.ComponentType;
  path: string;
}

const DashboardContainer: React.FC = () => {
  const location = useLocation();
  const path: string = location.pathname;
  const navigate = useNavigate();
  const tabs: tabsProps[] = [
    { title: "Dashboard", image: icon1, imageA: icon1a },
    { title: "Users", image: icon2, imageA: icon2a },
    { title: "Products", image: icon3, imageA: icon3a },
    { title: "Vendors", image: icon4, imageA: icon2a },
    { title: "Orders", image: icon5, imageA: icon5a },
    { title: "Logout", image: icon6, imageA: icon6a },
  ];
  const [pageTitle, setPageTitle] = useState<string>("");

  const handleSelect = (i: number) => {
    switch (i) {
      case 0:
        navigate(Home);
        break;

      case 1:
        navigate(Users);
        break;

      case 2:
        navigate(Products);
        break;

      case 3:
        navigate(Vendors);
        break;

      case 4:
        navigate(Orders);
        break;

      case 5:
        localStorage.clear();
        window.location.reload();

        break;

      default:
        navigate(Home);
    }
  };

  useEffect(() => {
    let title: string = "";
    switch (path) {
      case Home:
        title = "Welcome To Dashboard";
        break;

      case Users:
        title = "Welcome To Users";
        break;

      case Products:
        title = "Welcome To Products";
        break;

      case Vendors:
        title = "Welcome To Vendors";
        break;

      case Orders:
        title = "Welcome To Orders";
        break;

      default:
        title = "Welcome To Dashboard";
    }
    setPageTitle(title);
  }, [path]);

  const getIsActive = (index: number) => {
    switch (index) {
      case 0:
        return path === Home || path === Dashboard;
      case 1:
        return path === Users;
      case 2:
        return path === Products;
      case 3:
        return path === Vendors;
      case 4:
        return path === Orders;

      default:
        return false;
    }
  };

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-left">
          <Sidebar
            tabs={tabs}
            getIsActive={getIsActive}
            handleSelect={handleSelect}
          />
        </div>
        <div className="dashboard-right">
          <HeaderContainer pageTitle={pageTitle} />

          <div style={{ padding: "4.5rem 2rem 0rem 2rem" }}>
            <Routes>
              {routesArr.map((route: RouteProps) => {
                return (
                  <Route
                    key={route.path}
                    element={<route.component />}
                    path={route.path.slice(10, route.path.length)}
                  />
                );
              })}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardContainer;
