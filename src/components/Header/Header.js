import React from "react";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Header.css";

export const Header = (props) => {
  return !props.mobileNavBarIsOpen ? (
    <motion.div className="Header">
      <FaBars
        className="Header__icon"
        onClick={props.setMobileNavBarIsOpen}
        size={20}
      />
    </motion.div>
  ) : (
    <></>
  );
};
