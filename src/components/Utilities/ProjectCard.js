import React from "react";
import "./ProjectCard.css";
import { FaRegHandPointRight } from "react-icons/fa";

export const ProjectCard = ({
  imageLink,
  title,
  description,
  techStack,
  keyPoints,
  projectLink,
}) => {
  return (
    <div className="Project-card">
      <img src={imageLink} alt={title} />
      <div className="Project-card-content">
        <h3 className="Project-card-title">{title}</h3>
        <p className="Project-card-description">{description}</p>
        <ul className="Project-card-keyPoints">
          {keyPoints.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <div className="Project-card-subtitles">
          {techStack.map((item, index) => {
            return (
              <span className="badge" key={index}>
                {item}
              </span>
            );
          })}
        </div>
        <a href={projectLink} target="_blank" className="Project-card-link">
          <FaRegHandPointRight className="Side-bar__icon" size={20} />
          {"Link"}
        </a>
      </div>
    </div>
  );
};
