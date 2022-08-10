import React from "react";
// import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Logo.png";

export default function NavBar() {
  // const navigate = useNavigate();

  return (
    <nav className="top-0 h50 border-bottom-light">
      <div className="flex middle center h100p container">
        <div className="logo flex gap5 w60p end">
          <img className="h30" src={Logo} alt="logo" />
          <span className="italic dark-light">Marketing</span>
        </div>
        <div className="flex w40p end gap10">
        <a className="btn-nav border-none font-07 pointer" href="https://formations.learnylib.com" target="_blank" rel="noopener noreferrer">Déconnexion</a>
  
        </div>
      </div>
    </nav>
  );
}
