import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { NavLink } from "react-router-dom";

const NavbarComp = () =>  {
  
  function changeTheme () {
  let elemet = document.body
  elemet.classList.toggle("light-theme")
  }

  return (
    <>
      <Navbar bg="black" variant="dark" expand="lg">
        <Container>
          <NavLink to={"/home"} >
            <img src={require('./img/logo.png')} alt="logo" width={"60px"} />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{justifyContent: "flex-end"}}>
              <NavLink className="navlink" to="/complain-user" >Complain</NavLink>
              <NavLink className="navlink" to="/profile" >Profile</NavLink>
              <NavLink className="navlink" to="/" >Logout</NavLink>
              <i class='bx bxs-circle-half fs-4 change-theme cursor-pointer' id="theme-button" onClick={changeTheme} ></i>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComp
