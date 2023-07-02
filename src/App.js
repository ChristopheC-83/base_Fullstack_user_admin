import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/accueil" element={<Accueil/>} />
      </Routes>
    </>
  );
}

export default App;
