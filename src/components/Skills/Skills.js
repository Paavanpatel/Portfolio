import React from "react";
import skills from "./skills-data";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-page" id="skills">
      <div className="skillheadertitle">
        <h1>My Skills</h1>
        <p>
          {" "}
          I am a versatile and creative individual with a passion for designing and developing innovative solutions. I have honed
          my technical skills and honed my ability to communicate effectively with clients and team members.
        </p>
      </div>
      <div className="skills-section">
        <div className="skills-container">
          {skills.map(({ name, icon, alt }) => (
            <div className="skill" key={name}>
              <img src={icon} alt={alt} />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
