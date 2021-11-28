import React, { useRef } from 'react';
import './Home.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import { useSpring, animated } from 'react-spring';

// import bg from '../images/home/dal-bg.jpg';



export default function Home() {

  const parallax = useRef(null);

  return (

    <Parallax
      ref={parallax}
      pages={6}
    >

      <ParallaxLayer
        offset={0.25}
        speed={2}
        className="home-pg-1"
      >
        <div className="dal-slogan">
          TAKING <br />
          <span className="dal-slogan-important">ACTION</span> <br />
          TO DEFEND AMERICAN LIBERTY
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.25}
        speed={1}
      >
        <div className="home-content-cntr">
          <div className="home-content-title">Issue Ad Campaigns</div>

          <div className="home-content">
            Defending American Liberty develops targeted issue ad campaigns to support conservative elected officials to promote the America First agenda, defend American liberty, and the Constitution of the United States.
          </div>
        </div>
      </ParallaxLayer>

    </Parallax>
  )
}
