import React from "react";
import useTextTyping from "../hooks/useTextTyping";
import style from "../styles/AboutSection.module.css";

const AboutSection = () => {
  let Transition3: string = "About";
  const AboutText3 = useTextTyping(Transition3, 0);
  return (
    <div className={style.TextContainer}>
      <h1 className={style.IntroText}>
        <span className={`${style.IntroText}  `}>{AboutText3}</span>
        <span className={`${style.IntroTextBlur}  `}>{AboutText3}</span>
      </h1>
    </div>
  );
};

export default AboutSection;
