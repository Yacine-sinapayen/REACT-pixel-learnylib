import React, { useRef, useState } from "react";import { useNavigate } from "react-router-dom";

export default function SignInForm() {
  // J'importe ma méthode signIn depuis mon userContext.js

  const navigate = useNavigate();

  // State du msg de validation que je passe à ma balise <p>
  const [validation, setValidation] = useState(" ");

  // UseRef me permet de récupérer tous les éléments de mes inputs dans un tableau sans avoir à mapper dessus
  const inputs = useRef([]);

  const addInputs = (el) => {
    // Si mon el existe et qu'il n'est pas déjà dans mon tableau "useRef([])", alors je l'y rajoute
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();

    // Ce log nous renvoie un objet avec une propriété current à l'intérieur de laquelle il y a mon tableau d'inputs. Les refs de mes inputs récupèrent les values et les insèrent dans un tableau
    // console.log(inputs);

    // Inscription côté server Firebase. 
    try {
      setValidation("");
      // console.log(cred); => me renvoie les valeurs de mes inputs
      // Une fois connecté je veux accéder à ma route privée
      navigate("/marketing/private-actions");

    } catch (err) {
        setValidation("Oops email et/ou mot de passe incorrect")
    }
  };

  return (
    <div className="container p-5 h90vh flex center-content mrg-auto w75p gap40">
      <form
        // Permet de reset les inputs du formulaire
        onSubmit={handleForm}
        ref={formRef}
        className="w50p gap10 flex center column"
      >
        <h1 className="self-center dark">Connexion</h1>
        <input
          ref={addInputs}
          name="email"
          required={true}
          type="email"
          placeholder="email"
          id="signInEmail"
          maxLength="200"
        />
        <input
          ref={addInputs}
          name="pwd"
          required={true}
          type="password"
          placeholder="Mot de passe"
          maxLength="200"
          id="signInPwd"
        />
        <div className=" center-content">
          <button className="btn blue-bg w100 center">Connexion</button>
        </div>
        <p className="red">{validation}</p>
      </form>
    </div>
  );
}
