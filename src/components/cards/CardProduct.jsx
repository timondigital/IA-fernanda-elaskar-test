import React from "react";

import styles from "./cardProduct.module.scss";
const CardProduct = (props) => {
  const { img, alt, text } = props;

  return (
    <div className={styles.product}>
      <img src={img} className={styles.img} alt={alt} />
      <h5>{text}</h5>
    </div>
  );
};

export default CardProduct;
