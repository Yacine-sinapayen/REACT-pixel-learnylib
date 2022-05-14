import { Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";

import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
