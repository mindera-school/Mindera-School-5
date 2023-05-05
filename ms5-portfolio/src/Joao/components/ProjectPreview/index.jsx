import React from "react";
import {
  PreviewContainer,
  PreviewImage,
  PreviewText,
  PreviewTitle,
  PreviewTechnologies,
  Anchor
} from "./styles";
import GitHubImage from "../../images/github-universe.png";

const ProjectPreview = ({ project }) => {
  const displayedTechnologies =
    project.topics.length > 5 ? project.topics.slice(0, 5) : project.topics;

  const getRandomColor = () => {
    const colors = ["#e74c3c", "#8e44ad", "#3498db", "#27ae60", "#f1c40f"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const gitHubLink = project.clone_url;

  return (
    <Anchor href={gitHubLink} target="_blank" rel="noopener noreferrer">
      <PreviewContainer>
        {GitHubImage && <PreviewImage src={GitHubImage} alt={project.name} />}
        <PreviewText>
          <PreviewTitle>{project.name}</PreviewTitle>
          <PreviewTechnologies>
            {displayedTechnologies.map((tech, index) => (
              <span key={index} style={{ backgroundColor: getRandomColor() }}>
                {tech}
              </span>
            ))}
            {project.topics.length > 5 && " . . ."}
          </PreviewTechnologies>
        </PreviewText>
      </PreviewContainer>
    </Anchor>
  );
};

export default ProjectPreview;
