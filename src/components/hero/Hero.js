import React from "react";
import "./Hero.css";
import bg2 from "../../images/bg2.webp";
import bg4 from "../../images/bg4.jpg";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="hero_section">
      <div className="heading">

        <div class="loader"> </div>
        <div class="load"></div>

        <div className="text">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              // delay: 10,
              strings: ["for the planet", "for your life", "for the future"],
            }}
          />

          <div className="tag">
            <em>GO ECO</em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
