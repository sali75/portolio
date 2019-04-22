import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

class Skills extends Component {
  render() {
    return (
      <div className="skills-wrapper">
        <h2 className="skills-title">Skills</h2>

        <div className="skills">
          <Slide left>
            <div className="skills-container">
              <div className="skill-bar">
                <div className="skill-name">React</div>

                <wired-progress value="90" />
              </div>

              <div className="skill-bar">
                <div className="skill-name">React Native</div>
                <wired-progress value="85" />
              </div>

              <div className="skill-bar">
                <div className="skill-name">Redux</div>
                <wired-progress value="90" />
              </div>

              <div className="skill-bar">
                <div className="skill-name">Express.js</div>

                <wired-progress value="80" />
              </div>
              <div className="skill-bar">
                <div className="skill-name">MongoDB</div>
                <wired-progress value="80" />
              </div>
              <div className="skill-bar">
                <div className="skill-bar">
                  <div className="skill-name">JavaScript</div>

                  <wired-progress value="90" />
                </div>
                <div className="skill-name">Python</div>
                <wired-progress value="75" />
              </div>
              <div className="skill-bar">
                <div className="skill-name">Ruby</div>
                <wired-progress value="75" />
              </div>
            </div>
          </Slide>

          <Slide right>
            <div className="learning">
              <wired-card elevation="4">
                <h4 className="learn-title">things i recently learned</h4>
                <div className="learn-wrapper">
                  <wired-checkbox checked />
                  <h5 className="learn-title-two">Firebase</h5>
                </div>

                <div className="learn-wrapper">
                  <wired-checkbox checked />
                  <h5 className="learn-title-two">Styled-Components</h5>
                </div>
                <div className="learn-wrapper">
                  <wired-checkbox checked />
                  <h5 className="learn-title-two">Bootstrap</h5>
                </div>

                <div className="learn-wrapper">
                  <wired-checkbox checked />
                  <h5 className="learn-title-two">Proton Native</h5>
                </div>

                <h4 className="learn-title">Currently Learning</h4>
                <div className="current-wrapper">
                  <div className="current-ele">
                    <wired-checkbox />
                    <h5 className="learn-title-three">Mareial ui </h5>
                  </div>
                  <div className="current-ele">
                    <wired-checkbox />
                    <h5 className="learn-title-three">Postgresql </h5>
                  </div>
                  <div className="current-ele">
                    <wired-checkbox />
                    <h5 className="learn-title-three">Vue.js </h5>
                  </div>
                </div>
              </wired-card>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
export default Skills;
