import React, {useContext} from "react";
import { UserContext } from "../../context/userContext";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import PrivateActions from "../Home/PrivateActions/PrivateActions";

export default function Home() {

//  J'import mon context pour pouvoir changer le texte de la page home en fonction  du status de l'utilisateur
  const {currentUser} = useContext(UserContext);

  return (
    <div className="container p-5">
      <h1 className="display-3 text-light">
        { currentUser ? (<PrivateActions />) : (<SignUpForm />)}
      </h1>
      
    </div>
  );
}