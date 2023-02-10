import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import * as constants from "../../constants";
import PROJECT_THUMBNAIL_1 from "./../../icons/ProjectsIcon/PROJECT_THUMBNAIL_1.png";
import PROJECT_THUMBNAIL_2 from "./../../icons/ProjectsIcon/PROJECT_THUMBNAIL_2.png";
import PROJECT_THUMBNAIL_3 from "./../../icons/ProjectsIcon/PROJECT_THUMBNAIL_3.png";
import PROJECT_THUMBNAIL_4 from "./../../icons/ProjectsIcon/PROJECT_THUMBNAIL_4.png";
import PROJECT_THUMBNAIL_5 from "./../../icons/ProjectsIcon/PROJECT_THUMBNAIL_5.png";
import PROJECT_THUMBNAIL_6 from "./../../icons/ProjectsIcon/PROJECT_THUMBNAIL_6.png";

const Project = () => {
  return (
    <section className="projectsSection" id="projects">
      <div className="projectsIntroContainer">
        <h1 className="projectsHeader">My Projects</h1>
        <p className="projectsDisclaimer">
          Here is a collection of notable projects that I have worked on over the years. Some of the projects are from my
          schooling and therefore the intellectual property is not my own to distribute. If you wish to see one of these projects
          that are locked feel free to contact me and I can issue an account to view them.
        </p>
      </div>
      <div className="projectsContainer">
        <ProjectCard
          name={constants.PROJECT_TITLE_1}
          description={constants.PROJECT_DESP_1}
          picture={PROJECT_THUMBNAIL_1}
          tech={constants.PROJECT_TOOLS_1}
          url={constants.PROJECT_LINK_1}
        />
        <ProjectCard
          name={constants.PROJECT_TITLE_2}
          description={constants.PROJECT_DESP_2}
          picture={PROJECT_THUMBNAIL_2}
          tech={constants.PROJECT_TOOLS_2}
          url={constants.PROJECT_LINK_2}
        />
        <ProjectCard
          name={constants.PROJECT_TITLE_3}
          description={constants.PROJECT_DESP_3}
          picture={PROJECT_THUMBNAIL_3}
          tech={constants.PROJECT_TOOLS_3}
          url={constants.PROJECT_LINK_3}
        />
        <ProjectCard
          name={constants.PROJECT_TITLE_4}
          description={constants.PROJECT_DESP_4}
          picture={PROJECT_THUMBNAIL_4}
          tech={constants.PROJECT_TOOLS_4}
          url={constants.PROJECT_LINK_4}
        />
        <ProjectCard
          name={constants.PROJECT_TITLE_5}
          description={constants.PROJECT_DESP_5}
          picture={PROJECT_THUMBNAIL_5}
          tech={constants.PROJECT_TOOLS_5}
          url={constants.PROJECT_LINK_5}
        />
        <ProjectCard
          name={constants.PROJECT_TITLE_6}
          description={constants.PROJECT_DESP_6}
          picture={PROJECT_THUMBNAIL_6}
          tech={constants.PROJECT_TOOLS_6}
          url={constants.PROJECT_LINK_6}
        />
      </div>
    </section>
  );
};

export default Project;
