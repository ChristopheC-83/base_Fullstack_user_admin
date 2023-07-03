import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";
import AddUser from "./pages/Add_User";
import UpdateUser from "./pages/Update_User";
import Disconnect from "./pages/Disconnect";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/accueil" element={<Accueil/>} />
        <Route path="/connexion" element={<Connexion/>} />
        <Route path="/add_user" element={<AddUser/>} />
        <Route path="/update_user" element={<UpdateUser/>} />
        <Route path="/disconnect" element={<Disconnect/>} />
      </Routes>
    </>
  );
}

export default App;
