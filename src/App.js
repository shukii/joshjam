import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './scss/App.scss';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" render={() => <Home/>}/>
        <Route exact path="/about" render={() => <About/>}/>
        <Route exact path="/skills" render={() => <Skills/>}/>
        <Route exact path="/experience" render={() => <Experience/>}/>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route render={() => <NotFound/>}/> 
      </Switch>
    </div>
  );
}

export default App;
