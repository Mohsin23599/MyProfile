import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./SideBarFooter.css";
import { motion } from "framer-motion";

const SideBarFooterData = [
  {
    icon: <FaLinkedin className="Side-bar__icon" size={20} />,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/mohammad-mohsin-ahmed-2a747416b/",
    cName: "Side-bar__footer-icon",
  },
  {
    icon: <FaGithub className="Side-bar__icon" size={20} />,
    title: "GitHub",
    link: "https://github.com/Mohsin23599/",
    cName: "Side-bar__footer-icon",
  },
  {
    icon: <SiGmail className="Side-bar__icon" size={20} />,
    title: "Gmail",
    link: "mailto:no-reply@example.com",
    cName: "Side-bar__footer-icon",
  },
];

const SideBarFooter = (props) => {
  return (
    <>
      <motion.div
        className="Side-bar__footer-div"
        animate={{
          flexDirection: props.isOpen ? "row" : "column",
          height: props.isOpen ? "64px" : "192px",
          transition: {
            duration: 0.5,
          },
        }}
      >
        {SideBarFooterData.map((item, index) => {
          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="Side-bar__footer-icon"
            >
              {item.icon}
            </a>
          );
        })}
      </motion.div>
    </>
  );
};

export default SideBarFooter;
