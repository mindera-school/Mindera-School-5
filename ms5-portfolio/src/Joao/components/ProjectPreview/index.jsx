import React from "react";
import {
  PreviewContainer,
  PreviewImage,
  PreviewText,
  PreviewTitle,
  PreviewTechnologies,
} from "./styles";

const ProjectPreview = ({ name, technologies, imageUrl }) => {
  const displayedTechnologies =
    technologies.length > 5 ? technologies.slice(0, 5) : technologies;

  const getRandomColor = () => {
    const colors = ["#e74c3c", "#8e44ad", "#3498db", "#27ae60", "#f1c40f"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <PreviewContainer>
      {imageUrl && <PreviewImage src={imageUrl} alt={name} />}
      <PreviewText>
        <PreviewTitle>{name}</PreviewTitle>
        <PreviewTechnologies>
          {displayedTechnologies.map((tech, index) => (
            <span key={index} style={{ backgroundColor: getRandomColor() }}>
              {tech}
            </span>
          ))}
          {technologies.length > 5 && " . . ."}
        </PreviewTechnologies>
      </PreviewText>
    </PreviewContainer>
  );
};

export default ProjectPreview;
