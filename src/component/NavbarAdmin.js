import React, { Component } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import 'boxicons'

const NavbarAdmin = () => {

  const navigation = useNavigate()

  const logout = () => {
    localStorage.removeItem('user')
    navigation('/login')
  }

  function changeTheme () {
    let elemet = document.body
    elemet.classList.toggle("light-theme")
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
              <NavLink className="navlink" to="/complain" >Complain</NavLink>
              <NavLink className="navlink" to="/category" >Category</NavLink>
              <NavLink className="navlink" to="/product" >Product</NavLink>
              <NavLink className="navlink" to="/login"  onClick={logout}>Logout</NavLink>
              <i class='bx bxs-circle-half fs-4 change-theme cursor-pointer' id="theme-button" onClick={changeTheme} ></i>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarAdmin
