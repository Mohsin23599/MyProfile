import React from "react";
import { Link as LinkS } from "react-scroll";
import { FaUserAlt, FaBookReader, FaClipboardList } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import "./SideBarItem.css";
import { motion } from "framer-motion";

const SideBarItemData = [
  {
    icon: <FaUserAlt className="Side-bar__icon" size={20} />,
    title: "About Me",
    link: "About",
    cName: "Side-bar__item-text",
  },
  {
    icon: <FaBookReader className="Side-bar__icon" size={20} />,
    title: "Education",
    link: "Education",
    cName: "Side-bar__item-text",
  },
  {
    icon: <MdWork className="Side-bar__icon" size={20} />,
    title: "Experience",
    link: "Experience",
    cName: "Side-bar__item-text",
  },
  {
    icon: <FaClipboardList className="Side-bar__icon" size={20} />,
    title: "Projects",
    link: "Projects",
    cName: "Side-bar__item-text",
  },
];

function setSpanDisplay(newDisplay) {
  document.documentElement.style.setProperty("--span-display", newDisplay);
}

const SideBarItem = (props) => {
  props.isOpen ? setSpanDisplay("block") : setSpanDisplay("none");
  return (
    <>
      <ul className="Side-bar__item-block">
        {SideBarItemData.map((item, index) => {
          return (
            <motion.li key={index} className={item.cName}>
              <LinkS
                to={item.link}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                className={"Side-bar__scroll-link"}
                offset={0}
                style={{
                  justifyContent: props.isOpen ? "flex-start" : "center",
                  paddingLeft: props.isOpen ? "1rem" : "0",
                }}
              >
                {item.icon}
                <span>{item.title}</span>
              </LinkS>
            </motion.li>
          );
        })}
      </ul>
    </>
  );
};

export default SideBarItem;
