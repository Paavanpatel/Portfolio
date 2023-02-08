import React from "react";
import "./Projects.css";
import * as constants from "./../../constants";
import PROJECT_THUMBNAIL_1 from "./../../icons/ProjectsIcon/PROJECT_THUMBNAIL_1.png";
import PROJECT_THUMBNAIL_2 from "./../../icons/ProjectsIcon/PROJECT_THUMBNAIL_2.png";
import PROJECT_THUMBNAIL_3 from "./../../icons/ProjectsIcon/PROJECT_THUMBNAIL_3.png";
import PROJECT_THUMBNAIL_4 from "./../../icons/ProjectsIcon/PROJECT_THUMBNAIL_4.png";
// import { Link } from "react-router-dom";
import github from "./../../icons/GitHub-Black-32px.png";

const projects = [
  {
    title: constants.PROJECT_TITLE_1,
    description: constants.PROJECT_DESP_1,
    tools: constants.PROJECT_TOOLS_1,
    thumbnail: PROJECT_THUMBNAIL_1,
    githubLink: constants.PROJECT_LINK_1,
  },
  {
    title: constants.PROJECT_TITLE_2,
    description: constants.PROJECT_DESP_2,
    tools: constants.PROJECT_TOOLS_2,
    thumbnail: PROJECT_THUMBNAIL_2,
    githubLink: constants.PROJECT_LINK_1,
  },
  {
    title: constants.PROJECT_TITLE_3,
    description: constants.PROJECT_DESP_3,
    tools: constants.PROJECT_TOOLS_3,
    thumbnail: PROJECT_THUMBNAIL_3,
    githubLink: constants.PROJECT_LINK_1,
  },
  {
    title: constants.PROJECT_TITLE_4,
    description: constants.PROJECT_DESP_4,
    tools: constants.PROJECT_TOOLS_4,
    thumbnail: PROJECT_THUMBNAIL_4,
    githubLink: constants.PROJECT_LINK_1,
  },
  {
    title: constants.PROJECT_TITLE_5,
    description: constants.PROJECT_DESP_5,
    tools: constants.PROJECT_TOOLS_5,
    thumbnail: PROJECT_THUMBNAIL_4,
    githubLink: constants.PROJECT_LINK_1,
  },
];

function ProjectCard({ title, description, tools, thumbnail, link }) {
  return (
    <div className="project-card">
      <div className="notch-container">
        <div className="notch"></div>
      </div>
      <div className="project-card-header">
        <h2>{title}</h2>
      </div>
      <div className="project-card-body">
        {thumbnail && (
          <div className="thumbnail">
            <img src={thumbnail} alt="Project Thumbnail"></img>
          </div>
        )}
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
      <div className="project-card-footer">
        <p>{tools}</p>
      </div>
      <div className="bottom-container">
        <a href={link}>
          <img className="bottom-button" src={github} alt="icon"></img>
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <div className="projects-body">
        <div className="projects-cards">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tools={project.tools}
              thumbnail={project.thumbnail}
              link={project.githubLink}
            />
          ))}
        </div>
      </div>
      <div className="projects-title">
        <h1>MY PROJECTS</h1>
      </div>
    </div>
  );
}

export default Projects;
