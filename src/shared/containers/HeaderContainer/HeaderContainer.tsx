import React from "react";
import Header from "../../components/Header/Header";

interface HeaderContainerProps {
  pageTitle: string;
}

const HeaderContainer: React.FC<HeaderContainerProps> = (props) => {
  const { pageTitle } = props;
  return <Header pageTitle={pageTitle} />;
};

export default HeaderContainer;
