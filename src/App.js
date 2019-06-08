import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";

import "./scss/App.scss";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/skills" render={() => <Skills />} />
        <Route exact path="/portfolio" render={() => <Portfolio />} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
};

export default App;
