import React from "react";
import NavigationBar from "../../molecules/NavigationBar";

import "./_styles.scss";

const PageLayout = ({ children }) => (
  <div className="page-layout">
    <NavigationBar />
    <div className="page-content">{children}</div>
  </div>
);

export default PageLayout;
