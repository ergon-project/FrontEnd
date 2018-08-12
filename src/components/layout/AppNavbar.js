import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";

class AppNavbar extends Component {

  render() {
    return (
<div>
<Navbar brand='ERGO' right>
  <NavItem onClick={() => console.log('test click')}>Register</NavItem>
  <NavItem href="/login">Login</NavItem>
</Navbar>
</div>
      
    );
  }
}

export default AppNavbar;
