import React from "react";

import product1Img from "../../../assets/img/img-vitalinea-griego.png";
import product2Img from "../../../assets/img//img-vitalinea-sin-azucar.png";
import product3Img from "../../../assets/img/img-vitalinea-bebible.png";

import styles from "./familyLine.module.scss";
import CardProduct from "../../cards/CardProduct";
const FamilyLine = () => {
  return (
    <div className={styles.familyLineContent}>
      <h2 className={styles.title}>LA FAMILIA VITALÍNEA</h2>
      <div className={styles.sliderContent}>
        <CardProduct
          img={product1Img}
          alt="Vitalínea Griego"
          text="Vitalínea Griego"
        />
        <CardProduct
          img={product2Img}
          alt="Vitalínea sin Azúcar"
          text="Vitalínea sin Azúcar"
        />
        <CardProduct
          img={product3Img}
          alt="Vitalínea Bebible"
          text="Vitalínea Bebible"
        />
      </div>
    </div>
  );
};

export default FamilyLine;
