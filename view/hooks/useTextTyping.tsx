import { useState, useEffect } from "react";

enum Phase {
  Typing,
  Pause,
  Deleting,
}

const useTextTyping = (TargetText: string, delay: number) => {
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
        }, 60);
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

export default useTextTyping;
