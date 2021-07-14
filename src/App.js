import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './layouts/HomePage';
import Navbar from './layouts/Navbar';
import NewJob from './pages/NewJob';
import AllJobs from './pages/AllJobs';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route exact path="/addjob" component={NewJob}></Route>
              <Route exact path="/alljobs" component={AllJobs}></Route>
          </Switch>
        </div>

      
    </Router>
  );
}

export default App;
