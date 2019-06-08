import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavigationBar = () => (
  <Menu borderless fixed="top">
    <Menu.Item>
      <Link to="/home">Home</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/about">About Me</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/skills">Skills &amp; Brands</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/portfolio">Portfolio</Link>
    </Menu.Item>
  </Menu>
);

export default NavigationBar;
