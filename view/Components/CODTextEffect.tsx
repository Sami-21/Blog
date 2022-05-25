import React, { useEffect, useState } from "react";
import { InView, useInView } from "react-intersection-observer";
import style from "../styles/IntroText.module.css";

interface Props {
  Transition1: string;
  Transition2: string;
  Transition3: string;
}

const useTextTyping = (TargetText: string, TypeSpeed: number) => {
  const { ref, inView } = useInView({
    threshold: 10,
  });
  enum Phase {
    Typing,
    Pause,
    Deleting,
  }
  const [phase, setphase] = useState(Phase.Typing);
  const [Text, setText] = useState(``);

  useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const NewText = TargetText.slice(0, Text.length + 1);

        if (NewText === TargetText) {
          setphase(Phase.Pause);
        }

        const timeout = setTimeout(() => {
          setText(NewText);
        }, TypeSpeed);
        return () => clearTimeout(timeout);
      }

      // case Phase.Deleting: {
      //   if (!TargetText) {
      //     setphase(Phase.Typing);
      //     return;
      //   }
      //   const NewText = TargetText.slice(0, Text.length - 1);

      //   const timeout = setTimeout(() => {
      //     setText(NewText);
      //   }, 60);
      //   return () => clearTimeout(timeout);
      // }
      case Phase.Pause:
      default:
        const timeout = setTimeout(() => {
          setphase(Phase.Deleting);
        }, 100);
        return () => clearTimeout(timeout);
    }
  }, [TargetText, Text]);

  return Text;
};

const elementInViewport = (el: any): boolean => {
  let top = el.offsetTop;
  let left = el.offsetLeft;
  let width = el.offsetWidth;
  let height = el.offsetHeight;

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
    <h1 className={`${style.IntroText} text-4xl`}>
      {" "}
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
