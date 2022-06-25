import React from "react";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Header.css";

export const Header = (props) => {
  return (
    <motion.div className="Header">
      <FaBars className="Header__icon" onClick={props.setMobileNavBarIsOpen} />
    </motion.div>
  );
};