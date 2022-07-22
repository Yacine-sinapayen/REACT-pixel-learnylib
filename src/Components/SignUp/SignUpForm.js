import React, { useRef, useState } from "react";

export default function SignUpForm() {
  // State du msg de validation que je passe à ma balise <p>
  const [validation, setValidation] = useState("");

  // UseRef me permet de récupérer tous les éléments de mes inputs dans un tableau sans avoir à mapper dessus
  const inputs = useRef([]);
  const addInputs = (el) => {
    // Si mon el existe et qu'il n'est pas déjà dans mon tableau "useRef([])", alors je l'y rajoute
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    // Je demande un mpd avec minimum 6 caractères
    if (
      (inputs.current[1].value.length || inputs.current[2].value.length) < 6
    ) {
      setValidation("6 caractères minimum  🙏");
      // Je sors de la fonction avec un :
      return;
    }
    // On check que les deux mdp soient identiques
    else if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Les mots de passe ne correspondent pas");
    }
  };

  return (
    <div className="center-content mrg-auto w75p gap40 flex block">
      <form onSubmit={handleForm} className="w50p gap10">
        <h1 className="self-center">Inscription</h1>
        <input
          ref={addInputs}
          name="email"
          required={true}
          type="email"
          placeholder="email"
          id="signUpEmail"
          maxLength="200"
        />
        <input
          ref={addInputs}
          name="pwd"
          required={true}
          type="password"
          placeholder="Mot de passe"
          maxLength="200"
          id="signUpPwd"
        />
        <input
          ref={addInputs}
          name="pwd"
          required={true}
          type="password"
          placeholder="Mot de passe"
          maxLength="200"
          id="repeatPwd"
        />
        <p className="red">{validation}</p>
        <div className="center-content">
          <button className="button blue-bg">Inscription</button>
        </div>
      </form>
      {/* <form onSubmit={handleForm} className="w50p gap10 middle">
        <h1 className="self-center">Connexion</h1>
        <input
          ref={addInputs}
          type="email"
          maxLength="200"
          required={true}
          placeholder="email"
          name="email"
        />
        <input
          ref={addInputs}
          type="text"
          maxLength="200"
          required={true}
          placeholder="Mot de passe"
          name="Mot de passe"
        />

        <div className="center-content">
          <button className="button blue-bg">Connexion</button>
        </div>
      </form> */}
    </div>
  );
}
