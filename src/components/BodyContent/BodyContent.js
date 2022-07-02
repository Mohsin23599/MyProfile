import React, { useEffect } from "react";
import "./BodyContent.css";
import { About } from "./../Pages/About";
import { Education } from "./../Pages/Education";
import { Experience } from "./../Pages/Experience";
import { Projects } from "./../Pages/Projects";

function setBodyMarginLeft(newMargin) {
  document.documentElement.style.setProperty("--body-margin-left", newMargin);
}

export const BodyContent = (props) => {
  useEffect(() => {
    props.isOpen ? setBodyMarginLeft("180px") : setBodyMarginLeft("60px");
  }, [props.isOpen]);

  return (
    <div className="Body-Content">
      <About />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
};
