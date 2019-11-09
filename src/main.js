import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import HazardID from "./hazardID";
import Contact from "./contact";

class Main extends Component {
    render() {
      return (
          <HashRouter>
            <div>
            <h1>PSM Self Assessment Questionaire</h1>
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/hazardID">Hazard ID</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>              
            </ul>
            <div className="content">  
                <Route exact path="/" component={Home}/> 
                <Route path="/hazardID" component={HazardID}/> 
                <Route path="/contact" component={Contact}/>
            </div>
          </div>
          </HashRouter>
      );
    }
  }
   
  export default Main;

  // this could include header, footer, navigation