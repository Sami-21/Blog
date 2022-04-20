import React from "react";

const useRandomString = (length: number) => {
  let randomStr: string = "";
  let alphabet: string = "abcdefghijklmnopqrstuvwxyz";

  for (let i: number = 0; i < length; i++) {
    randomStr += alphabet[Math.floor(Math.random() * alphabet.length - 1)];
  }
  randomStr[0].toUpperCase();
  return randomStr;
};

export default useRandomString;
