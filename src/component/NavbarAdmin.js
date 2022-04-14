import React, { Component } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import 'boxicons'

export default class NavbarComp extends Component {
  render() {
  const navLinkStyle = ({isActive}) => {
    return {
      color: isActive ? 'rgba(247, 77, 77, 1)' : 'white'
    }
  }

    return (
      <>
        <Navbar bg="black" variant="dark" expand="lg">
          <Container>
            <NavLink to={"/"} >
              <img src={require('./img/logo.png')} alt="logo" width={"60px"} />
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" style={{justifyContent: "flex-end"}}>
                <NavLink style={navLinkStyle} to="/complain" >Complain</NavLink>
                <NavLink style={navLinkStyle} to="/category" >Category</NavLink>
                <NavLink style={navLinkStyle} to="/product" >Product</NavLink>
                <NavLink style={navLinkStyle} to="/login" >Logout</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}
