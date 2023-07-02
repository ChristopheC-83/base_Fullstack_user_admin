import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function Accueil() {
  return (
    <div className="main">
      <Header />
      <div className="main-content">
        <h2>Accueil site de base</h2>
        <br />
        <p>
          Ce site doit être un framework pour concevoir des projets React avec
          un back end php/mySql
        </p>
        <br />
        <p>Il doit contenir un système d'administration des utilisateurs</p>
        <br />
        <p>Un page d'inscription</p>
        <br />
        <p>Une page de gestion des profils</p>
        <br />
      </div>
      <Footer />
    </div>
  );
}
