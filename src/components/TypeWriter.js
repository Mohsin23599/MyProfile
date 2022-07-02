import React, { useEffect, useState, useRef } from "react";

export const TypeWriter = ({ words }) => {
  const index = useRef(0);
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    index.current = 0;
    setCurrentText("");
  }, [wordIndex]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentText((value) => value + words[wordIndex].charAt(index.current));
      index.current += 1;
      if (index.current > words[wordIndex].length) {
        setWordIndex((prevIndex) => {
          return (prevIndex + 1) % words.length;
        });
      }
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentText, wordIndex]);
  return <p style={{ display: "inline" }}>{currentText}</p>;
};
