import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import css from "./index.css";
import Dog from "./Dog";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
          <li><NavLink aria-current="true"  exact to="/">Home</NavLink></li>
          <li><NavLink aria-current="true"  to="/stuff">Stuff</NavLink></li>
          <li><NavLink aria-current="true"  to="/contact">Contact</NavLink></li>
          <li><NavLink aria-current="true"  to="/dog">Dog</NavLink></li>

          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/dog" component={Dog}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
