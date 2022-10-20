import React from "react";

import styles from "./buttonRectangle.module.scss";

const ButtonRectangle = (props) => {
  const { text, onClick } = props;

  return (
    <button className={`${styles.btn}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonRectangle;
