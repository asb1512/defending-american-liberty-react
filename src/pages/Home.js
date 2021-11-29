import React, { useRef } from 'react';
import './Home.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import { useSpring, animated } from 'react-spring';

import bg from '../images/home/dal-bg.jpg';
import dc from '../images/home/dc-at-night.png'
import mic from '../images/home/microphone.jpg';



export default function Home() {

  const parallax = useRef(null);

  return (

    <Parallax
      ref={parallax}
      pages={6}
      enabled={true}
    >


      {/* PAGE 1 */}
      <ParallaxLayer
        offset={0}
        speed={0}
      >
        <img
          src={bg}
          alt="Defending American Liberty"
          className="dal-hero-img"
        />
      </ParallaxLayer>

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


      {/* PAGE 2 */}
      <ParallaxLayer
        offset={1}
        speed={0}
      >
        <img
          src={dc}
          alt="Defending American Liberty: Issue Ad Campaigns"
          className="home-page-2-img"
        />
      </ParallaxLayer>


      <ParallaxLayer
        offset={1.25}
        speed={1}
      >
        <div className="home-content-cntr">
          <div className="home-content-title dal-slogan text-shadow">Issue Ad Campaigns</div>

          <div className="home-content">
            Defending American Liberty develops targeted, issue-ad campaigns to support conservative elected officials to promote the America First agenda, defend American liberty, and the Constitution of the United States.
          </div>
        </div>
      </ParallaxLayer>

      {/* PAGE 3 */}
      <ParallaxLayer
        offset={2}
        speed={0}
      >
        <img
          src={mic}
          alt="Defending American Liberty: Calls to Congress"
        />
      </ParallaxLayer>

    </Parallax>
  )
}
