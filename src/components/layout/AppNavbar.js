import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import { Link } from "react-router-dom";

class AppNavbar extends Component {

  render() {
    return (
 <div>
<Navbar brand='ERGO' right className='blue'>
  <NavItem onClick={() => console.log('test click')}>Register</NavItem>
  <NavItem href="/login">Login</NavItem>
</Navbar>
</div> 

      
    );
  }
}

export default AppNavbar;

{/* <div>
<Navbar brand='ERGO' right className='blue'>
  <NavItem onClick={() => console.log('test click')}>Register</NavItem>
  <NavItem href="/login">Login</NavItem>
</Navbar>
</div> */}