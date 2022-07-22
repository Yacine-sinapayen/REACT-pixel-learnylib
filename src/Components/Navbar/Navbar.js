import React from "react";
import "./NavBar.scss";
import Logo from "../../Assets/Logo.png";

export default function NavBar() {
  return (
    <nav>
      <div className="container-navbar">
        <div className="logo w60p end">
          <img src={Logo} alt="logo" />
          <span>Marketing</span>
        </div>
        <div className="flex w40p end gap10">
          <button className="button blue-bg">Connexion</button>
          <button className="button red-bg">Déconnexion</button>
        </div>
      </div>
    </nav>
  );
}
