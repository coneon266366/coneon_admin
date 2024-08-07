import React, { useState } from "react";
import CategoryPage from "../../components/CategoryPage/CategoryPage";

const CategoryContainer: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  const labels: string[] = [
    "S No.",
    "Category Name",
    "Status",
    "Login Type",
    "Signup Date",
    "Last Login",
  ];

  return (
    <CategoryPage
      isActive={isActive}
      handleActive={handleActive}
      labels={labels}
    />
  );
};

export default CategoryContainer;
