import React from "react";
import "./Experience.css";
import { TimelineCard } from "./../Utilities/TimelineCard";

const ExperienceDetails = [
  {
    companyName: "Qualcomm India Pvt. Ltd.",
    role: "Associate Engineer - Modem RF Software Engineer",
    duration: "June, 2021 - Present",
  },
  {
    companyName: "American Express India Pvt. Ltd. ",
    role: "Software Engineer Intern ",
    duration: "May, 2020 - July, 2020",
  },
];

export const Experience = () => {
  return (
    <div id="Experience" className="Experience">
      <h2 style={{ marginTop: "-2.5rem", paddingBottom: "1rem" }}>
        My Professional Journey
      </h2>
      {ExperienceDetails.map((item, index) => {
        return (
          <TimelineCard key={`Experience-${index}`} left={!(index & 1)}>
            <div
              className="Experience-items"
              style={
                index & 1
                  ? {
                      paddingLeft: "10%",
                      alignItems: "flex-start",
                      textAlign: "start",
                    }
                  : {
                      paddingRight: "10%",
                      alignItems: "flex-end",
                      textAlign: "end",
                    }
              }
            >
              <div className="Experience-h1">{item.companyName}</div>
              <div className="Experience-h2">{item.role}</div>
              <div className="Experience-h4">{item.duration}</div>
            </div>
          </TimelineCard>
        );
      })}
    </div>
  );
};
