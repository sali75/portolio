import React from "react";
import { scroller } from "react-scroll";

const Header = () => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 80,
      smooth: true,
      offset: -150
    });
  };

  return (
    <div className="header-container">
      <h1 className="heading">Ali sadeghi</h1>
      <div className="main-nav">
        <wired-button elevation="2">about me</wired-button>
        <wired-button elevation="2" onClick={() => scrollToElement("skills")}>
          Skills
        </wired-button>
        <wired-button elevation="2" onClick={() => scrollToElement("footer")}>
          contact me
        </wired-button>
      </div>
    </div>
  );
};

export default Header;
