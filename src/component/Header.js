import React from 'react'
import { LuPower } from 'react-icons/lu';
import { LuPowerOff } from 'react-icons/lu';
import { FaUserPlus } from 'react-icons/fa';
export default function Header() {
  return (
    <div className='header'>
    <div className="icones-header"></div>
        <div className="spacer"></div>
      <h1>Header</h1>
      <div className="spacer"></div>
      <div className="icones-header">
      <div className="icone-header LuPower"><LuPower/></div>
      <div className="icone-header LuPowerOff"><LuPowerOff/></div>
      <div className="icone-header FaUserPlus"><FaUserPlus/></div>
      </div>
    </div>
  )
}
