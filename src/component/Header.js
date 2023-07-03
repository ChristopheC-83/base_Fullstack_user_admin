import React from "react";
import { useState } from "react";
import { LuPower } from "react-icons/lu";
import { LuPowerOff } from "react-icons/lu";
import { FaUserPlus } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import { useContext } from "react";
import { userContext } from "../context/UserContext";

export default function Header() {
  const { connected, setConnected } = useContext(userContext);

  function switchConnected() {
    setConnected(!connected);
    console.log(connected);
  }

  return (
    <div className="header">
      <button onClick={switchConnected}>switch</button>
      <div className="icone-header-container "></div>
      <div className="spacer"></div>
      <h1>
        <a href="accueil">Header</a>
      </h1>
      <div className="spacer"></div>

      <div
        className={`icone-header-container connected ${
          connected ? "" : "dnone"
        }`}
      >
        <div className="icone-header LuPower">
          <a href="connexion">
            <LuPower />
          </a>
        </div>
        <div className="icone-header FaUserPlus">
          <a href="add_user">
            <FaUserPlus />
          </a>
        </div>
      </div>

      <div
        className={`icone-header-container connected ${
          connected ? "dnone" : ""
        }`}
      >
        <div className="icone-header BsPencilFill">
          <a href="update_user">
            <BsPencilFill />
          </a>
        </div>
        <div className="icone-header LuPowerOff">
          <a href="disconnect">
            <LuPowerOff />
          </a>
        </div>
      </div>
    </div>
  );
}
