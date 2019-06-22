import React from "react";
import NavigationBar from "../../molecules/NavigationBar";
import Footer from "../../organisms/Footer";

class PageLayout extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { children } = this.props;
    return (
      <div className="page-layout">
        <NavigationBar scrollOffset={510} />
        <div className="page-content">{children}</div>
        <Footer />
      </div>
    );
  }
}

export default PageLayout;
