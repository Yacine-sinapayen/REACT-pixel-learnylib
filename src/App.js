import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Actions from "./pages/Home/PrivateActions/PrivateActions";
import NavBar from "./components/Navbar/Navbar";
import "./scss/index.scss";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {/* C'est depuis ma route parent Home que je check la connexion */}
        <Route path="/marketing" element={<Home />}>
          {/* Si la route parent valide la connexion alors j'affiche cette route */}
          <Route path="/marketing/private-actions" element={<Actions />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
