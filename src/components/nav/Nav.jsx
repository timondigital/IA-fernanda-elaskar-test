import React, { useState } from "react";

import facebook from "../../assets/img/img-social-facebook.svg";
import youtube from "../../assets/img/img-social-youtube.svg";
import instagram from "../../assets/img/img-social-instagram.svg";

import styles from "./nav.module.scss";

const Nav = (props) => {
  const [showNav, setshowNav] = useState(false);

  const handleShowNav = () => {
    setshowNav(!showNav);
  };

  return (
    <>
      <div className={styles.btnBurger} onClick={handleShowNav}>
        <span
          className={`${styles.lineBurger1} ${showNav ? styles.active : ""}`}
        ></span>
        <span
          className={`${styles.lineBurger2} ${showNav ? styles.active : ""}`}
        ></span>
        <span
          className={`${styles.lineBurger3} ${showNav ? styles.active : ""}`}
        ></span>
      </div>

      <nav className={`${styles.nav} ${showNav ? styles.show : ""}`}>
        <div className={styles.btnGroup}>
          <a className={styles.btn} to="/">
            Nuestros productos
          </a>
          <a className={styles.btn} to="/">
            Disfruta cuidarte
          </a>
          <a className={styles.btn} to="/productsSections">
            Blog
          </a>
        </div>
        <div className={styles.networks}>
          <a className={styles.networksButton}>
            <img src={facebook} alt="facebook" />
          </a>
          <a className={styles.networksButton}>
            <img src={instagram} alt="instagram" />
          </a>
          <a className={styles.networksButton}>
            <img src={youtube} alt="youtube" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
