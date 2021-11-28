import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function NavOptions(props) {

  const navOptionsStyle = useSpring({
    height: props.toggled ? '50vh' : '0vh',
  })

  return (
    <animated.div className="nav-options-cntr" style={navOptionsStyle}>
      <ul>
        <li>Achievements</li>
        <li>DAL Chairman</li>
        <li>Terms and Conditions</li>
        <li>Privacy Policy</li>
        <li>Contact Us</li>
      </ul>
    </animated.div>
  )
}
