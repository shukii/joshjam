import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./_styles.scss";

class NavigationBar extends React.Component {
  constructor() {
    super();
    this.state = {
      lightBackground: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > this.props.scrollOffset) {
      this.setState({ lightBackground: true });
    }

    if (window.pageYOffset < this.props.scrollOffset) {
      this.setState({ lightBackground: false });
    }
  }

  render() {
    return (
      <Menu
        className={`navigation-bar${this.state.lightBackground ? "-fill" : ""}`}
        borderless
        fixed="top"
      >
        <Menu.Item>
          <Link to="/home">Home</Link>
        </Menu.Item>
        {/* <Menu.Item>
          <Link to="/portfolio">Portfolio</Link>
        </Menu.Item> */}
      </Menu>
    );
  }
}

export default NavigationBar;
