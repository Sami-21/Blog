import React from "react";
import useTextTyping from "../hooks/useTextTyping";
import style from "../styles/IntroText.module.css";

interface Props {
  Transition1: string;
  Transition2: string;
  Transition3: string;
}

const elementInViewport = (el: any): boolean => {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    top + height <= window.pageYOffset + window.innerHeight &&
    left + width <= window.pageXOffset + window.innerWidth
  );
};

const CODTextEffect: React.FC<Props> = ({
  Transition1,
  Transition2,
  Transition3,
}) => {
  const TextState1: string = useTextTyping(Transition1, 60);
  const TextState2: string = useTextTyping(Transition2, 60);
  const TextState3: string = useTextTyping(Transition3, 60);
  return (
    <h1 className={style.IntroText}>
      {/* First State */}

      <span className={`${style.FirstTextTransition}`}>
        {TextState1.split("").map((char, index) => {
          return (
            <span key={index} className={style.Disappeared1}>
              {char}
            </span>
          );
        })}
      </span>

      {/* Second State */}

      <span className={`${style.SecondTextTransition}  `}>
        {TextState2.split("").map((char, index) => (
          <span key={index} className={` ${style.Disappeared2}`}>
            {char}
          </span>
        ))}
      </span>

      {/* Third State */}

      <span className={style.ThirdTextTransition}>
        {TextState3.split("").map((char, index) => (
          <span className={`${style.Showed}  `} key={index}>
            {char}
          </span>
        ))}
      </span>
      <span className={style.IntroTextBlur}>
        {TextState3.split("").map((char, index) => (
          <span className={`${style.Showed}`} key={index}>
            {char}
          </span>
        ))}
      </span>
    </h1>
  );
};

export default CODTextEffect;
