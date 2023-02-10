import React from "react";
import "./Header.css";
import avatar from "../../avatar.png";
import github from "./../../icons/github-icon.svg";
import linkedin from "./../../icons/linkedin-icon.svg";
import resume from "./../../icons/resume-icon.svg";
import { GITHUB_URL, LINKEDIN_URL } from "../../constants";
import RESUME from "./../../Resume/Resume.pdf";
import programmer from "./../../icons/programmer.svg";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMeContainer">
        <div className="avatarImg">
          <img src={avatar} alt="avatar"></img>
        </div>
        <div className="Info">
          <div className="title">
            <h1>Hello!</h1>
          </div>
          <div className="moreInfo">
            <h2>
              I'm Pavan, a Software Development Engineer{" "}
              <span>
                <img src={programmer} alt="logo"></img>
              </span>{" "}
              based in Canada.
            </h2>
          </div>
        </div>
      </div>
      <div className="footerUrls">
        <a href={GITHUB_URL}>
          <img src={github} alt="github profile"></img>
        </a>
        <a href={LINKEDIN_URL}>
          <img src={linkedin} alt="linkedin profile"></img>
        </a>
        <a href={RESUME}>
          <img src={resume} alt="Resume Document"></img>
        </a>
      </div>

      <hr />
    </div>
  );
};

export default AboutMe;
