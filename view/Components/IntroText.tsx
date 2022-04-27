import React from "react";
import useTextTyping from "../hooks/useTextTyping";
import style from "../styles/IntroText.module.css";

let Transition1: string = "Ps: A wx Mvqk$ BctrKzsgf Huljhezsw";
let Transition2: string = "Ma! Q fd Xifv_ UnrsZlomz Pvftkqabk";
let Transition3: string = `Hi, I am Sami, FullStack Developer`;

const IntroText = () => {
  const IntroTextState1: string = useTextTyping(Transition1, 250);
  const IntroTextState2: string = useTextTyping(Transition2, 250);
  const IntroTextState3: string = useTextTyping(Transition3, 250);

  return (
    <div className={style.TextContainer}>
      <h1 className={style.IntroText}>
        <span className={`${style.FirstTextTransition}`}>
          {IntroTextState1.split("")
            .slice(0, 3)
            .map((char, index) => {
              return (
                <span key={index} className={style.Disappeared1}>
                  {char}
                </span>
              );
            })}
        </span>
        <br />

        <span className={`${style.SecondTextTransition}  `}>
          {IntroTextState2.split("")
            .slice(0, 3)
            .map((char, index) => (
              <span key={index} className={` ${style.Disappeared2}`}>
                {char}
              </span>
            ))}
        </span>
        <br />
        <span className={style.ThirdTextTransition}>
          {IntroTextState3.split("")
            .slice(0, 3)
            .map((char, index) => (
              <span className={`${style.Disappeared3}  `} key={index}>
                {char}
              </span>
            ))}
        </span>

        <br />
        {/* {IntroTextState3.split("")
          .slice(3, 14)
          .map((char, index) => (
            <span className={`${style.IntroText}  `} key={index}>
              {char}
            </span>
          ))}
        <br />
        {IntroTextState3.split("")
          .slice(14)
          .map((char, index) => (
            <span className={`${style.IntroText}  `} key={index}>
              {char}
            </span>
          ))} */}
        {/* <span className={`${style.IntroTextBlur}  `}>
          {IntroTextState3.slice(0, 3)} <br />
          {IntroTextState3.slice(3, 14)}
          <br />
          {IntroTextState3.slice(14)}
        </span> */}
      </h1>
    </div>
  );
};

export default IntroText;
