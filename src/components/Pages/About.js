import React from "react";
import "./About.css";
import videoBG from "./../../assets/videos/About_bg.mp4";
import { TypeWriter } from "./../TypeWriter";
import { Bounce } from "react-reveal";
import { FaDownload } from "react-icons/fa";

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
        <Bounce bottom>
          <a
            href="https://drive.google.com/u/0/uc?id=15cBUcu2YtAwjFw2UFGtC_3XLYxDbrDMZ&export=download"
            download={true}
            className="Resume-link"
          >
            <FaDownload style={{ paddingRight: "12px" }} />
            Download Resume
          </a>
        </Bounce>
        <br />
        <Bounce right duration={3000}>
          {
            "I'm a Software Engineer, who enjoys writing code and solving problems. Always excited to learn new technologies.\n"
          }
        </Bounce>
        <br />
        <br />
        <Bounce left duration={4000}>
          {"Want to know more about me? Scroll down"}
        </Bounce>
      </div>
    </div>
  );
};
