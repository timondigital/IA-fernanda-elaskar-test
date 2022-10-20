import React from "react";

import productImg from "../../../assets/img/img-bote-fresa.png";
import endorsedImg from "../../../assets/img/img-sello-avalado.png";
import caloriesImg from "../../../assets/img/img-100-kcal.png";
import ButtonRectangle from "../../buttons/buttonRectangle/ButtonRectangle";
import ButtonCircle from "../../buttons/buttonCircle/ButtonCircle";
import NutritionalInfo from "../../nutritionalInfo/NutritionalInfo";

import fresa2 from "../../../assets/img/img-fresas-2.png";
import fresa4 from "../../../assets/img/img-fresas-4.png";
import fresa5 from "../../../assets/img/img-fresas-5.png";
import fresa6 from "../../../assets/img/img-fresas-6.png";
import fresa7 from "../../../assets/img/img-fresas-7.png";
import fresa8 from "../../../assets/img/img-fresas-8.png";
import fresa9 from "../../../assets/img/img-fresas-9.png";

import styles from "./product.module.scss";

const Product = () => {
  return (
    <div className={styles.productContent}>
      <img src={fresa2} className={`${styles.fresa}`} alt="fresa" />
      <img src={fresa4} className={`${styles.fresa}`} alt="fresa" />
      <img src={fresa5} className={`${styles.fresa}`} alt="fresa" />
      <img src={fresa6} className={`${styles.fresa}`} alt="fresa" />
      <img src={fresa7} className={`${styles.fresa}`} alt="fresa" />
      <img src={fresa8} className={`${styles.fresa}`} alt="fresa" />
      <img src={fresa9} className={`${styles.fresa}`} alt="fresa" />
      <img src={fresa9} className={`${styles.fresa}`} alt="fresa" />
      <img src={fresa5} className={`${styles.fresa}`} alt="fresa" />

      <div className={styles.backgroundProduct}></div>
      <img
        src={productImg}
        className={styles.productImg}
        alt="botella Vitalínea bebible de fresa 217gr."
      />
      <div className={styles.productSheet}>
        <div className={styles.tasteContent}>
          Sabor:
          <div className={`${styles.taste} ${styles.active}`}>Fresa</div>
          <div className={styles.taste}>Guayaba</div>
          <div className={styles.taste}>Toronja</div>
        </div>
        <h1 className={styles.titleProduct}>
          Vitalínea® Bebible Fresa 217 gr.
        </h1>
        <p className={styles.descriptionProduct}>
          ¡La presentación ideal para llevar contigo! Vitalínea bebible es la
          opción si eres de las personas que siempre están activas y quieren
          probar algo sano, rico y práctico.
        </p>
        <ButtonRectangle text="Comprar en Walmart" onClick="" />
        <div className={styles.certificates}>
          <img
            src={endorsedImg}
            alt="Avalado por la federación mexicana de diabetes"
          />
          <img src={caloriesImg} alt="Menos de 100 calorias" />
        </div>
      </div>
      <ButtonCircle />
      <NutritionalInfo />
    </div>
  );
};

export default Product;
