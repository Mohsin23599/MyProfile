import React, { useEffect } from "react";
import "./Projects.css";
import { ProjectCard } from "../Utilities/ProjectCard";
import budgetGIF from "./../../assets/videos/Apna_Budget_Screens.gif";
import dfmGIF from "./../../assets/videos/DFM.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProjectDetails = [
  {
    title: "Budget Application",
    imageLink: budgetGIF,
    description:
      "A mobile application developed to capture the daily expenses. Major features:",
    keyPoints: [
      "One Time Login using OTP",
      "Authentication and Authorization",
      "Push Notification",
      "Graphical representation",
    ],
    techStack: ["React-Native", "Firebase", "Expo", "Git"],
    projectLink: "https://github.com/Mohsin23599/",
  },
  {
    title: "Digital Frequency Meter",
    imageLink: dfmGIF,
    description:
      "Designed and implemented a basic digital frequency meter with self-designed power supply. key features:",
    keyPoints: [
      "555 Timer IC used as reference signal generator",
      "Power Supply with ∓5V, ∓12V, 0V",
      "Used both analog and digital IC's",
    ],
    techStack: ["Multisim", "Vivado"],
    projectLink: "https://github.com/Mohsin23599/",
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
      <h2 style={{ marginTop: "1.63em", marginBottom: "1.63em" }}>
        My Projects
      </h2>
      <Swiper
        id="Projects-swiper"
        slidesPerView={"auto"}
        spaceBetween={5}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
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
              keyPoints={item.keyPoints}
              projectLink={item.projectLink}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
