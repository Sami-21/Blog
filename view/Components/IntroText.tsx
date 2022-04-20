import React from "react";
import useRandomString from "../hooks/useRandomString";
import useTextTyping from "../hooks/useTextTyping";
import style from "../styles/IntroText.module.css";

let Transition1: string = "Ps: A wx Mvqk$ BctrKzsgf Huljhezsw";
let Transition2: string = "Ma! Q fd Xifv_ UnrsZlomz Pvftkqabk";
let Transition3: string = `Hi, I am Sami, FullStack Developer`;

const IntroText = () => {
  const IntroTextState1: string = useTextTyping(Transition1, 0);
  const IntroTextState2: string = useTextTyping(Transition2, 60);
  const IntroTextState3: string = useTextTyping(Transition3, 120);

  return (
    <div className={style.TextContainer}>
      <h1 className={style.IntroText}>
        {/* <span className={`${style.FirstTextTransition} `}>
          {IntroTextState1}
        </span>
        <span className={`${style.SecondTextTransition}  `}>
          {IntroTextState2}
        </span> */}
        <span className={`${style.IntroText}  `}>{IntroTextState3}</span>
        <span className={`${style.IntroTextBlur}  `}>{IntroTextState3}</span>
      </h1>
    </div>
  );
};

export default IntroText;
