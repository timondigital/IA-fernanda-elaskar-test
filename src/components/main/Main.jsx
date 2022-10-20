import React from "react";

import Product from "./product/Product";
import FamilyLine from "./familyLine/FamilyLine";

import styles from "./main.module.scss";
const Main = () => {
  return (
    <main className={styles.main}>
      <Product />
      <FamilyLine />
    </main>
  );
};

export default Main;
