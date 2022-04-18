import React from "react";
import NavbarComp from "./NavbarComp";
import NavbarAdmin from "./NavbarAdmin";


const Navbar = () => {
    const user = false
    return (
        user ? <NavbarAdmin /> : <NavbarComp />
    )
}

export default Navbar