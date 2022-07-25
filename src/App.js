import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Actions from "./pages/Actions/Actions";
import NavBar from "./components/Navbar/Navbar";
import "./scss/index.scss";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
      {/* C'est depuis ma route parent Home que je check la connexion */}
        <Route path="/" element={<Home />}>
        {/* Si la route parent valide la connexion alors j'affiche cette route */}
          <Route path="/actions" element={<Actions />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
