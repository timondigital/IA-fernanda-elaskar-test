import React from "react";
import Nav from "../nav/Nav";
import logoVitalinea from "../../assets/img/img-logo-vitalinea.png";

import styles from "./header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <a href="./" className={styles.logo}>
        <img src={logoVitalinea} alt="logo vitalinea" />
      </a>
      <Nav />
    </header>
  );
};

export default Header;
