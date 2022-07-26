import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";
import PrivateActions from "../Home/PrivateActions/PrivateActions";

export default function Home() {
  //  J'import mon context pour pouvoir changer le texte de la page home en fonction  du status de l'utilisateur
  const { currentUser } = useContext(UserContext);

  return (
    <div className="container p-5">
      <h1 className="display-3 text-light">
        {currentUser ? <PrivateActions /> : <SignInForm />}
      </h1>
    </div>
  );
};
