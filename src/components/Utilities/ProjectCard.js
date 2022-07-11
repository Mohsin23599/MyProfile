import React from "react";
import "./ProjectCard.css";
import { FaRegHandPointRight } from "react-icons/fa";

export const ProjectCard = ({ imageLink, title, description, techStack }) => {
  console.log(imageLink.budgetGIF);
  return (
    <div className="Project-card">
      <img src={imageLink} alt={title} />
      <div className="Project-card-content">
        <h3 className="Project-card-title">{title}</h3>
        <p className="Project-card-description">{description}</p>
        <div className="Project-card-subtitles">
          {techStack.map((item, index) => {
            return (
              <span className="badge" key={index}>
                {item}
              </span>
            );
          })}
        </div>
        <a
          href="https://github.com/Mohsin23599/"
          target="_blank"
          className="Project-card-link"
        >
          <FaRegHandPointRight className="Side-bar__icon" size={20} />
          {"Link"}
        </a>
      </div>
    </div>
  );
};
