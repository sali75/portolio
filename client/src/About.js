import React from "react";
import { WiredCard } from "wired-elements";
import Zoom from "react-reveal/Zoom";

const About = () => {
  return (
    <Zoom>
      <div className="about-container">
        <h2 className="about-header">I am Ali, nice to meet you</h2>
        <p>I am Full-Stack developer... </p>
        <p />
        <a className="about-email" />
        <br />
        <a className="about-email" />
      </div>
    </Zoom>
  );
};

export default About;
