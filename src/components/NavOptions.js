import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function NavOptions(props) {

  const navOptionsStyle = useSpring({
    height: props.toggled ? '18rem' : '0rem',
  })

  return (
    <animated.div className="nav-options-cntr" style={navOptionsStyle}>
      <div className="nav-options-list">
        <div>ACHIEVEMENTS</div>
        <div className="nav-option">DAL CHAIRMAN</div>
        <div className="nav-option">TERMS & CONDITIONS</div>
        <div className="nav-option">PRIVACY POLICY</div>
        <div className="nav-option">CONTACT US</div>
      </div>
    </animated.div>
  )
}
