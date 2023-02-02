import React from "react";
import cplus from "../../icons/c++-icon.svg";
import python from "../../icons/python-icon.svg";
import java from "../../icons/java-icon.svg";
import golang from "../../icons/golang-icon.svg";
import javascript from "../../icons/javascript-icon.svg";
import html5 from "../../icons/html-5-icon.svg";
import css from "../../icons/css-icon.png";
import reactjs from "../../icons/react-icon.svg";
import nodejs from "../../icons/node-js-icon.svg";
import springBoot from "../../icons/spring-logo-icon.svg";
import mongo from "../../icons/mongodb-icon.svg";
import postgres from "../../icons/postgresql-icon.svg";
import mysql from "../../icons/mysql-icon.svg";
import linux from "../../icons/linux-icon.png";
import windows from "../../icons/windows-icon.svg";
import intellij from "../../icons/intellij-icon.svg";
import vscode from "../../icons/visual-studio-code-icon.svg";
import android from "../../icons/android-studio-icon.svg";
import git from "../../icons/git-icon.svg";
import docker from "../../icons/docker-icon.svg";
import redux from "../../icons/redux-icon.svg";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-page" id="skills">
      <div className="skillheadertitle">
        <h1>Skills</h1>
      </div>
      <div className="skills-section">
        <div className="skills-container">
          <div className="skill">
            <img src={cplus} alt="C++ Icon" />
            <p>C++</p>
          </div>
          <div className="skill">
            <img src={python} alt="Python Icon" />
            <p>Python</p>
          </div>
          <div className="skill">
            <img src={java} alt="Java Icon" />
            <p>Java</p>
          </div>
          <div className="skill">
            <img src={golang} alt="Go Icon" />
            <p>Go</p>
          </div>
          <div className="skill">
            <img src={javascript} alt="JavaScript Icon" />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <img src={html5} alt="HTML5 Icon" />
            <p>HTML5</p>
          </div>
          <div className="skill">
            <img src={css} alt="CSS Icon" />
            <p>CSS</p>
          </div>
          <div className="skill">
            <img src={reactjs} alt="ReactJS Icon" />
            <p>ReactJS</p>
          </div>
          <div className="skill">
            <img src={nodejs} alt="NodeJS Icon" />
            <p>NodeJS</p>
          </div>
          <div className="skill">
            <img src={springBoot} alt="Spring Boot Icon" />
            <p>Spring Boot</p>
          </div>
          <div className="skill">
            <img src={mongo} alt="MongoDB Icon" />
            <p>MongoDB</p>
          </div>
          <div className="skill">
            <img src={postgres} alt="PostgreSQL Icon" />
            <p>PostgreSQL</p>
          </div>
          <div className="skill">
            <img src={mysql} alt="MySQL Icon" />
            <p>MySQL</p>
          </div>
          <div className="skill">
            <img src={linux} alt="Linux Icon" />
            <p>Linux</p>
          </div>
          <div className="skill">
            <img src={windows} alt="Windows Icon" />
            <p>Windows</p>
          </div>
          <div className="skill">
            <img src={intellij} alt="IntelliJ Icon" />
            <p>IntelliJ</p>
          </div>
          <div className="skill">
            <img src={vscode} alt="Visual Studio Code Icon" />
            <p>VS Code</p>
          </div>
          <div className="skill">
            <img src={android} alt="Android Studio Icon" />
            <p>Android Studio</p>
          </div>
          <div className="skill">
            <img src={git} alt="Git Icon" />
            <p>Git</p>
          </div>
          <div className="skill">
            <img src={docker} alt="Docker Icon" />
            <p>Docker</p>
          </div>

          <div className="skill">
            <img src={redux} alt="Redux Icon" />
            <p>Redux</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
