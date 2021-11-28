import React, { useState } from 'react';
import './Navbar.css';

import { Squash as Hamburger } from 'hamburger-react';



export default function Navbar() {

  const [isOpen, setOpen] = useState(false);

  return (
    <div className="navbar">

      <div className="hamburger-cntr">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
    </div>
  )
}
