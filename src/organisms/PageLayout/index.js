import React from "react";
import NavigationBar from "../../molecules/NavigationBar";
import Footer from "../../organisms/Footer";

const PageLayout = ({ children }) => (
  <div className="page-layout">
    <NavigationBar />
    <div className="page-content">{children}</div>
    <Footer />
  </div>
);

export default PageLayout;
