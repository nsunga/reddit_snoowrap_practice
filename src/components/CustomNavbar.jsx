import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return (
      <section id="navigation">
        <Navbar default collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/"><i className="fa fa-reddit-alien fa-lg"></i></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="/" to="/">
                Home
              </NavItem>
              <NavItem eventKey={2} href="/about" to="/about">
                About
              </NavItem>
              <NavItem eventKey={3} href="/news" to="/news">
                News
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    );
  }
}

// <Navbar default collapseOnSelect>
//   <Navbar.Collapse>
//     <Nav pullRight>
//       <NavItem eventKey={1} href="/" to="/">
//         Home
//       </NavItem>
//       <NavItem eventKey={2} href="/about" to="/about">
//         About
//       </NavItem>
//       <NavItem eventKey={3} href="/news" to="/news">
//         News
//       </NavItem>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>


// <Navbar>
//   <Nav pullRight>
//     <NavItem href="/" to="/">
//       Home
//     </NavItem>
//     <NavItem href="/" to="/about">
//       About
//     </NavItem>
//   </Nav>
// </Navbar>
