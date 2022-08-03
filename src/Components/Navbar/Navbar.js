import React from "react";
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
    <nav className="top-0 h50 border-bottom-light">
      <div className="flex middle center h100p container">
        <div className="logo flex gap5 w60p end">
          <img className="h30" src={Logo} alt="logo" />
          <span className="italic dark-light">Marketing</span>
        </div>
        <div className="flex w40p end gap10">
          <button
            onClick={logOut}
            className="btn-nav dark-light border-none font-07 pointer"
          >
            Déconnexion
          </button>
        </div>
      </div>
    </nav>
  );
}
