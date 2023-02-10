import React from "react";
import "./ProjectCard.css";
import { Card, CardActions, CardMedia, CardContent, Typography } from "@mui/material";
import gitHub from "../../../icons/GitHub-Black-32px.png";

const ProjectCard = ({ name, description, picture, tech, url }) => {
  return (
    <Card className="card" sx={{ borderRadius: 15, padding: 0 }}>
      <CardMedia component="img" height="140" image={picture} />
      <CardContent>
        <Typography sx={{ fontSize: 20 }}>{name}</Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {description}
        </Typography>
        <Typography>Technology Used</Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {tech}
        </Typography>
      </CardContent>
      <CardActions className="bottom">
        <a href={url}>
          <img src={gitHub} alt="Github" className="githubButton"></img>
        </a>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
