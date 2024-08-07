import React from "react";
import UsersPage from "../../components/UsersPage/UsersPage";

const UsersContainer: React.FC = () => {
  const labels: string[] = [
    "S No.",
    "Customer Name",
    "Status",
    "Login Type",
    "Signup Date",
    "Last Login",
  ];
  return <UsersPage labels={labels} />;
};

export default UsersContainer;
