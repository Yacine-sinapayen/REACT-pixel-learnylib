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
        <Route path="/" element={<Home />} />
        <Route path="/actions" element={<Actions />} />
      </Routes>
    </>
  );
};

export default App;
