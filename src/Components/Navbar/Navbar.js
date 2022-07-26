import React from "react";
import "./NavBar.scss";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import { auth } from "../../firebase-config";

export default function NavBar() {
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/marketing");
    } catch {
      alert(
        "Pour une raison inconnue nous ne pouvons vous déconnecter, veuillez vérifier votre connexion internet puis réessayer. Merci."
      );
    }
  };

  return (
    <nav>
      <div className="container-navbar">
        <div className="logo w60p end">
          <img src={Logo} alt="logo" />
          <span>Marketing</span>
        </div>
        <div className="flex w40p end gap10">
          <button 
          onClick={logOut} 
          className="button red-bg">
            Déconnexion
          </button>
        </div>
      </div>
    </nav>
  );
}
