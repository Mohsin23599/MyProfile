import React from "react";
import "./Education.css";
import { TimelineCard } from "./../Utilities/TimelineCard";

const EducationDetails = [
  {
    collegeName: "National Institute of Technology Warangal",
    degree: "Bachelor of Technology",
    courseName: "Electronics and Communication Engineering",
    grades: "CGPA: 9.09/10.00",
    duration: "June, 2017 - May, 2021",
  },
  {
    collegeName: "Narayana Junior College",
    degree: "Class XI & XII",
    courseName: "MPC",
    grades: "GPA: 9.8/10.00",
    duration: "June, 2015 - Mar, 2017",
  },
];

export const Education = () => {
  const timeCardStyles = {
    outCircleColor: "#ffffff",
    inCircleColor: "#070d17",
    verticalColor: "#070d17",
  };
  return (
    <div id="Education" className="Education">
      <h2
        style={{
          marginTop: "1.63em",
          marginBottom: "1.63em",
          color: "#ffffff",
        }}
      >
        My Education Journey
      </h2>
      <>
        {EducationDetails.map((item, index) => {
          return (
            <TimelineCard
              id={`Education-${index}`}
              left={index & 1}
              style={timeCardStyles}
            >
              <div
                className="Education-items"
                style={
                  !(index & 1)
                    ? {
                        paddingLeft: "2em",
                        alignItems: "flex-start",
                        textAlign: "start",
                      }
                    : {
                        paddingRight: "2em",
                        alignItems: "flex-end",
                        textAlign: "end",
                      }
                }
              >
                <div className="Education-h1">{item.collegeName}</div>
                <div className="Education-h2">{item.degree}</div>
                <div className="Education-h3">{item.courseName}</div>
                <div className="Education-h3">{item.grades}</div>
                <div className="Education-h4">{item.duration}</div>
              </div>
            </TimelineCard>
          );
        })}
      </>
    </div>
  );
};
