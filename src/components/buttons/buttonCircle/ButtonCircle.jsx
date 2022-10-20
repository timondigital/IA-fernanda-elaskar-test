import React from "react";

import styles from "./buttonCircle.module.scss";

const ButtonCircle = (props) => {
  const { text, onClick } = props;

  return (
    <button className={`${styles.btn}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonCircle;
