import React, { useEffect } from "react";
import "./Projects.css";
import { ProjectCard } from "../Utilities/ProjectCard";
import budgetGIF from "./../../assets/videos/Apna_Budget_Screens.gif";
import dfmGIF from "./../../assets/videos/DFM.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProjectDetails = [
  {
    title: "Budget Application",
    imageLink: budgetGIF,
    description:
      "I recently have joined the Juniper Networs as a Software\
      Developer-Intern in the DevOps team. My major part of the work has\
      been into the field of creating sustainable and flexible CI/CD\
      (Continuous Integration & Continuous Development) pipelines which\
      enables developers at Juniper to do rapid development.",
    techStack: ["Skill1", "Skill12", "Skill3", "Skill4"],
  },
  {
    title: "Budget Application",
    imageLink: dfmGIF,
    description:
      "I recently have joined the Juniper Networs as a Software\
    Developer-Intern in the DevOps team. My major part of the work has\
    been into the field of creating sustainable and flexible CI/CD\
    (Continuous Integration & Continuous Development) pipelines which\
    enables developers at Juniper to do rapid development.",
    techStack: ["Skill1", "Skill12", "Skill3", "Skill4"],
  },
];

export const Projects = () => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--swiper-navigation-size",
      "32px"
    );
    document.documentElement.style.setProperty("--swiper-theme-color", "black");
  }, []);
  return (
    <div id="Projects" className="Projects">
      <h2 style={{ marginTop: "-2.5rem", paddingBottom: "1rem" }}>
        My Projects
      </h2>
      <Swiper
        id="Projects-swiper"
        modules={[Navigation, Pagination]}
        slidesPerView={"auto"}
        navigation
        pagination={{ clickable: true }}
        className="Project-swiper"
      >
        {ProjectDetails.map((item, index) => (
          <SwiperSlide key={index}>
            <ProjectCard
              key={index}
              imageLink={item.imageLink}
              title={item.title}
              description={item.description}
              techStack={item.techStack}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
