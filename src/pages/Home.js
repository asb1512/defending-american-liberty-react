import React, { useRef, useEffect, useState } from 'react';
import './Home.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Transition, useSpring, animated } from 'react-spring';

import bg from '../images/home/dal-bg.jpg';
import dc from '../images/home/dc-at-night.png';
import telephone from '../images/home/telephone.jpg';
import mic from '../images/home/microphone.jpg';
import trump from '../images/home/trump.jpg';
import cap from '../images/home/capitol-sunrise.jpg';



export default function Home() {

  const [toggle, setToggle] = useState(true)

  const sloganStyle = useSpring({
    duration: 2000,
    to: {opacity: 1},
  })

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
        <div className="dal-slogan-cntr">
          <div className="dal-slogan" style={sloganStyle}>
            TAKING <br />
            <span className="dal-slogan-important">ACTION</span> <br />
            TO DEFEND <br /> <span className="dal-slogan-important">AMERICAN</span> <br /> LIBERTY
          </div>

          <a
            href="https://winred.com/about"
            alt="Defending American Liberty: Contribute Today"
            style={{ textDecoration: 'none' }}
          >
            <button className="contribute-btn">
              CONTRIBUTE
            </button>
          </a>
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
          className="home-page-img"
        />
      </ParallaxLayer>


      <ParallaxLayer
        offset={1.25}
        speed={1}
      >
        <div className="home-content-cntr">
          <div className="home-content-title text-shadow">Issue Ad Campaigns</div>

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
          src={telephone}
          alt="Defending American Liberty: Calls to Congress"
          className="home-page-img hpi-2"
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2.25}
        speed={1}
      >
        <div className="home-content-cntr">
          <div className="home-content-title text-shadow">Calls to Congress</div>

          <div className="home-content">
            Defending American Liberty funds efforts to mobilize voters to actively engage their elected representatives to advance the ideas enshrined in the Constitution and liberty for all Americans.
          </div>
        </div>
      </ParallaxLayer>

      {/* PAGE 4 */}
      <ParallaxLayer
        offset={3}
        speed={0}
      >
        <img
          src={mic}
          alt="Defending American Liberty: Letters and Petitions"
          className="home-page-img hpi-2"
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={3.25}
        speed={1}
      >
        <div className="home-content-cntr">
          <div className="home-content-title text-shadow">Letters and Petitions</div>

          <div className="home-content">
            Defending American Liberty has garnered hundreds of thousands of signatures in support of key parts of the America First agenda and has delivered those signed petitions and letters directly to Congress on your behalf.
          </div>
        </div>
      </ParallaxLayer>

      {/* PAGE 5 */}
      <ParallaxLayer
        offset={4}
        speed={0}
      >
        <img
          src={trump}
          alt="Defending American Liberty: The Fight to Defend American Liberty"
          className="home-page-img hpi-2"
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={4.11}
        speed={1}
      >
        <div className="home-content-cntr">
          <div className="home-content-title text-shadow home-fight-title">The Fight to Defend American Liberty</div>

          <div className="home-content home-fight-content">
            <p>
              Our liberties are under attack from activist progressive agitators and the leftist Democrat party. Through constant attacks on our Constitutional rights, the left wants to silence conservative voices and the advancement we made under President Trump.
            </p>

            <p>
              Through frivolous lawsuits, obstruction, false accusations, manipulation, and any other unscrupulous tactics, the Democrats, the mainstream media, and their socialist allies are attempting to block a commonsense America First Agenda that put Americans back to work and ushered in a new era of prosperity for all Americans.
            </p>

            <p>
              As an independent organization, we do everything we can to mobilize Conservatives to take action, put Americans First, a get the America First agenda passed into law. We fund calls to Congress, issue ad campaigns, and grassroots efforts to help ensure the success of the America First agenda and the ideals promoted by President Trump.
            </p>
          </div>
        </div>
      </ParallaxLayer>

      {/* PAGE 6 */}
      <ParallaxLayer
        offset={5}
        speed={0}
      >
        <img
          src={cap}
          alt="Defending American Liberty: Take Action Now"
          className="home-page-img"
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={5.15}
        speed={1}
      >
        <div className="home-content-cntr">
          <div className="home-content-title text-shadow">Letters and Petitions</div>

          <div className="home-content">
            We need your help to launch advertising, call congress, write letters and do everything else we can to ensure the America First Agenda is passed into law and defended in the courts. Your contribution funds those efforts...
          </div>

          <a
            href="https://winred.com/about"
            alt="Defending American Liberty: Contribute Today"
            style={{ textDecoration: 'none' }}
          >
            <button className="end-btn">
              CONTRIBUTE
            </button>
          </a>
        </div>
      </ParallaxLayer>

    </Parallax>
  )
}
