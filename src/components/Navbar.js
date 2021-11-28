import React, { useState } from 'react';
import './Navbar.css';

import { Squash as Hamburger } from 'hamburger-react';
import NavOptions from './NavOptions';

import logo from '../images/dfa-logo-white.png';



export default function Navbar() {

  const [isOpen, setOpen] = useState(false);

  return (
    <>
    <div className="navbar">

      <img
        src={logo}
        alt="Defending American Liberty"
        className="dal-logo-white"
      />

      <div className="hamburger-cntr">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
    </div>

    <NavOptions toggled={isOpen} />
    </>
  )
}
