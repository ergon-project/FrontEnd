import React, { Component } from "react";
import { header, NavItem } from "react-materialize";
import Login from "../../components/Login";
import Signup from "../Signup";

class AppNavbar extends Component {

  render() {
    return (
      <header>
      <nav>
          <div class="nav-wrapper blue-grey darken-4">
              <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large">Menu</a>
              <ul class="right hide-on-med-and-down">
                  <Login/><Signup/>
              </ul>
          </div>
      </nav>

      <ul id="slide-out" class="sidenav blue-grey darken-4">
          <li>
              <div class="user-view">
                  <div class="background">
                      <img src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&h=350"></img>
                  </div>
                  <center>
                      <a href="#upload-avatar"><img class="responsive-img" style={{width: '15vh'}} src="http://skagit-bucks.tk/ima/avatar.png"></img></a>
                  </center>
                  <h2 class="white-text tittle ">iHack</h2>
                  <br/>
              </div>
          </li>
          <li><a href="home.html" class="white-text"><i class="material-icons">android</i>Home</a></li>
          <li><a href="products.html" class="white-text"><i class="material-icons">store</i>Events</a></li>
          <li><a href="invoice.html" class="white-text"><i class="material-icons">info</i>Contact</a></li>
          <div class="col s0 m0 l2"></div>
          <br/>
          <li class="divider"></li>
          <li><a class="red-text" href="../index.html"><i class="red-text material-icons">close</i>Log-Out</a></li>
      </ul>
  </header>
    );
  }
}

export default AppNavbar;
