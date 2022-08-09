//  Login n'est qu'un composent de transition, il ne s'affiche que le temps de la validation du token de connexion du 'user'.
import React, { useEffect } from "react";
import { Authenticate } from "../../api/ActionApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Je récupère ma clés depuis l'url
    const key = window.location.href.split("/").pop();
    // Athenticate est la route que j'utilise pour vérifier
    // la validité de mon token
    const body = { token: key };
    Authenticate(body).then((data) => {
      if (!data) {
        window.location.href = "https://formations.learnylib.com/";
      } else {
        // Je mets dans mon localeStorage mon token
        window.localStorage.setItem("marketing_token", data.token);
        navigate("/marketing");
      }
    });
  }, [navigate]);

  return <div></div>;
};

export default Login;
