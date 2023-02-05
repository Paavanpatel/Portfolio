import React from "react";
import skills from "./skills-data";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-page" id="skills">
      <div className="skillheadertitle">
        <h1>MY SKILLS</h1>
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
