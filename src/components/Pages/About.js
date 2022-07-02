import React, { useRef } from "react";
import "./About.css";
import videoBG from "./../../assets/videos/About_bg.mp4";
import { TypeWriter } from "./../TypeWriter";

const TypeWriterWords = [
  "Mohsin !!",
  "a Developer",
  "a work hard, party hard guy :P",
];

export const About = () => {
  return (
    <div id="About" className="About">
      <video className="About-bg-video" src={videoBG} autoPlay loop muted />
      <div className="About-textWriter">
        {"I'm"} <TypeWriter text={"Hello"} words={TypeWriterWords} />
      </div>
      <div className="About-content">
        {
          "I'm a Software Engineer, who enjoys writing code and solving problems. Always excited to learn new technologies.\n"
        }
        <br />
        <br />
        {"Want to know more about me? Scroll down"}
      </div>
    </div>
  );
};
