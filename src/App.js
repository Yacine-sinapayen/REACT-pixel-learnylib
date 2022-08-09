import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Authentication/Login";
import "./scss/index.scss";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Login n'est qu'une page de transition elle ne s'affiche que le temps de la validation du token de connexion du 'user'. */}
        <Route path="/marketing/auth/:key" element={<Login />} />

        {/* J'ai accès à mes actions depuis le composant Home. */}
        <Route path="/marketing" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
