import React from "react";
import HomePage from "../../components/HomePage/HomePage";
import icon1 from "../../assets/homePageImages/users.svg";
import icon2 from "../../assets/homePageImages/products.svg";
import icon3 from "../../assets/homePageImages/dollar.svg";
import icon4 from "../../assets/homePageImages/cart.svg";
interface categoryProps {
  icon: string;
  title: string;
  values: number;
}

const HomePageContainer: React.FC = () => {
  const categories: categoryProps[] = [
    { title: "Users", values: 4, icon: icon1 },
    { title: "Products", values: 10000, icon: icon2 },
    { title: "Vendors", values: 400, icon: icon1 },
    { title: "Orders", values: 3000, icon: icon4 },
    { title: "Total Revenue", values: 3000, icon: icon3 },
  ];

  const progress: number = 50;

  return (
    <>
      <HomePage categories={categories} progress={progress} />
    </>
  );
};

export default HomePageContainer;
