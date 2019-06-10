import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StaticRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StaticRouter>
      <App />
    </StaticRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
