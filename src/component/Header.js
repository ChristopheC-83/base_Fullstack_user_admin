import React from "react";
import { LuPower } from "react-icons/lu";
import { LuPowerOff } from "react-icons/lu";
import { FaUserPlus } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
export default function Header() {
  return (
    <div className="header">
      <div className="icone-header-container "></div>
      <div className="spacer"></div>
      <h1>Header</h1>
      <div className="spacer"></div>

      <div className="icone-header-container connected ">
        <div className="icone-header FaUserPlus">
          <FaUserPlus />
        </div>
        <div className="icone-header LuPower">
          <LuPower />
        </div>
      </div>

      <div className="icone-header-container disconnected dnone">
        <div className="icone-header BsPencilFill">
          <BsPencilFill />
        </div>
        <div className="icone-header LuPowerOff">
          <LuPowerOff />
        </div>
      </div>


    </div>
  );
}
