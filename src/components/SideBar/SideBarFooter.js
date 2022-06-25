import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./SideBarFooter.css";
import { motion } from "framer-motion";

const SideBarFooterData = [
  {
    icon: <FaLinkedin className="Side-bar__icon" size={20} />,
    title: "Linkedin",
    link: "/About_Me",
    cName: "Side-bar__item-text",
  },
  {
    icon: <FaGithub className="Side-bar__icon" size={20} />,
    title: "GitHub",
    link: "/Education",
    cName: "Side-bar__item-text",
  },
  {
    icon: <SiGmail className="Side-bar__icon" size={20} />,
    title: "Gmail",
    link: "/Experience",
    cName: "Side-bar__item-text",
  },
];

const SideBarFooter = (props) => {
  return (
    <>
      <motion.div
        className="Side-bar__footer-div"
        animate={{
          flexDirection: props.isOpen ? "row" : "column",
          height: props.isOpen ? "8%" : "24%",
          transition: {
            duration: 0.5,
          },
        }}
      >
        {SideBarFooterData.map((item, index) => {
          return (
            <Link key={index} to={item.link}>
              {item.icon}
            </Link>
          );
        })}
      </motion.div>
    </>
  );
};

export default SideBarFooter;
