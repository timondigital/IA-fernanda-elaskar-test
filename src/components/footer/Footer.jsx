import React from "react";

import vitalineaImg from "../../assets/img/img-logo-footer.png";
import danoneImg from "../../assets/img/img-logo-danone.png";

import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={danoneImg} className={styles.img} alt="danone" />
      <img src={vitalineaImg} className={styles.img} alt="vitalínea" />
      <div className={styles.textContent}>
        <p>
          Términos y condiciones| Políticas de privacidad | Aviso de privacidad
        </p>
        <p>Danone de México 2017 ©. Todos los derechos reservados 2017</p>
      </div>
    </div>
  );
};

export default Footer;
