import React, { Component, Profiler } from "react";
import {NavLink,Route, Switch,Link} from 'react-router-dom';
import Home from './Home';
import Smurfs from './Smurfs';
import SmurfProfile from './SmurfProfile';
import SmurfForm from './SmurfForm';


import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Smurfs Village !</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/smurfs">Smurfs</NavLink>
          <NavLink to="/form">Add Smurf</NavLink>
          <Link  to='/smurfs/id'></Link>
          {/* <NavLink to="/smurfs/id">Smurf Profile</NavLink> */}
        </nav>
        
        <Switch>
        
        <Route exact path="/smurfs/:id">
          <SmurfProfile />
        </Route>

        <Route path="/smurfs">
          <Smurfs />
        </Route>

        <Route path="/form">
          <SmurfForm />
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>

        </Switch>
      </div>
    );
  }
}

export default App;
