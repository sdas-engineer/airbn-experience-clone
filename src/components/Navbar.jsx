import React from "react";
import logo from "../images/airbnb-logo.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <img src={logo} className="nav--logo" alt="Logo of Airbnb" />
        <a href="#" className="nav--btn">
          Add Listing
        </a>
      </nav>
    </>
  );
};

export default Navbar;
