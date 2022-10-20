import React from "react";

import { nutritionalData } from "../../assets/nutritionalData.js";
import NutritionalTable from "../tables/NutritionalTable";

import styles from "./nutritionalInfo.module.scss";

const NutritionalInfo = () => {
  return (
    <div className={styles.infoContent}>
      <h2 className={styles.title}>Información nutrimental</h2>
      <div className={styles.dataProductContent}>
        <div className={styles.textContent}>
          <h3>Vitalínea® Bebible Guayaba 217gr</h3>
          <h3>Valor promedio por porción de 217gr</h3>
          <h3>Porciones por envase: 1</h3>
          <div className={styles.ingredients}>
            <h3>Ingredientes:</h3>
            <p>
              Leche descremada pasteurizada y/o reconstituida pasteurizada de
              vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa
              (27.2mg/100g)), crema, almidón modificado, maltodextrina y
              cultivos lácticos.
            </p>
          </div>
        </div>
        <NutritionalTable data={nutritionalData} />
      </div>
    </div>
  );
};

export default NutritionalInfo;
