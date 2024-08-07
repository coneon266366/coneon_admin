import React, { useState } from "react";
import UsersPage from "../../components/UsersPage/UsersPage";

const UsersContainer: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  const labels: string[] = [
    "S No.",
    "Customer Name",
    "Status",
    "Login Type",
    "Signup Date",
    "Last Login",
  ];
  return (
    <UsersPage
      isActive={isActive}
      handleActive={handleActive}
      labels={labels}
    />
  );
};

export default UsersContainer;
