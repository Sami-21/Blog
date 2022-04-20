import React, { useState } from "react";
import style from "../styles/NavBar.module.css";

const NavBar = () => {
  const [isActive, setisActive] = useState([false]);
  const navigationState: boolean[] = [false, false, false, false, false];
  const NavBarItems: string[] = ["About", "Work", "Skills", "Contact", "Blog"];
  const NavBarHandler = (index: number) => {
    let previousActiveIndex = navigationState.findIndex((el) => {
      return el === true;
    });
    navigationState[previousActiveIndex] = false;
    navigationState[index] = true;
    setisActive(navigationState);
  };
  return (
    <nav className={style.NavBar}>
      <div
        onClick={() => setisActive([false, false, false, false, false])}
        className={style.logo}
      >
        <span className={style.text}>S</span>
        <span className={style.blur}>S</span>
      </div>
      <ul className={style.NavBarItemsContainer}>
        {NavBarItems.map((el: string, index: number) => {
          return (
            <li
              className="cursor-pointer"
              onClick={() => NavBarHandler(index)}
              key={index}
            >
              <span
                className={
                  isActive[index]
                    ? `${style.ActiveItem} ${style.NavBarItem}`
                    : `${style.NavBarItem}`
                }
                data-before={el.toUpperCase()}
              >
                {el.toUpperCase()}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
