import React, { useRef } from 'react';
import './Home.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from 'react-spring';

import bg from '../images/home/dal-bg.jpg';



export default function Home() {

  const parallax = useRef(null);

  return (
    // <div className="home-cntr">

    //   <img
    //     src={bg}
    //     alt="Defending American Liberty"
    //     className="home-bg"
    //   />

      <Parallax
        ref={parallax}
        pages={6}
        enabled={false}
      >

        <ParallaxLayer
          offset={0}
          speed={2}
        >
          <div className="dal-slogan">
            TAKING <br />
            <span className="dal-slogan-important">ACTION</span> <br />
            TO DEFEND AMERICAN LIBERTY
          </div>
        </ParallaxLayer>

      </Parallax>
    // </div>
  )
}
