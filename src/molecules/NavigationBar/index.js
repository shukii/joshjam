import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./_styles.scss";

const NavigationBar = () => (
  <Menu className="navigation-bar" borderless fixed="top">
    <Menu.Item>
      <Link to="/home">Home</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/portfolio">Portfolio</Link>
    </Menu.Item>
  </Menu>
);

export default NavigationBar;
