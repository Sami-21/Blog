import React from "react";
import style from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={style.NavBar}>
      <div className={style.logo}>
        <span className={style.text}>S</span>
        <span className={style.blur}>S</span>
      </div>
      <ul className={style.NavBarItemsContainer}>
        <li>About</li>
        <li>Work</li>
        <li>Skills</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
};

export default NavBar;
