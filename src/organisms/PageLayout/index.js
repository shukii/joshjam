import React from "react";
import NavigationBar from "../../molecules/NavigationBar";

const PageLayout = ({ children }) => (
  <div className="page-layout">
    <NavigationBar />
    <div className="page-content">{children}</div>
  </div>
);

export default PageLayout;
