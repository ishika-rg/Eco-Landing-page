import React from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="mainLogo">
        <img src={logo} alt="earthLogo" />
        <h1 className="logoName">ECO</h1>
      </div>
      <div className="links">
        <a href="#"> Products</a>
        <a href="#"> About</a>
        <a href="#"> Blogs</a>
        <a href="#"> Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
