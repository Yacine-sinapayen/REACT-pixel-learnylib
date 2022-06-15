import React from "react";
import "./NavBar.scss";
import Logo from "../../Assets/Logo.png";

export default function NavBar() {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>Marketing</span>
        </div>
      </div>
    </nav>
  );
}
