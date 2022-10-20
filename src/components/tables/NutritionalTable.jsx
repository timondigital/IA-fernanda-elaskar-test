import React from "react";

import styles from "./nutritionalTable.module.scss";

const NutritionalTable = ({ data }) => {
  return (
    <table className={styles.nutritionalTable}>
      <tbody>
        {data.map((data) => {
          return (
            <tr>
              <td>{data.data}</td>
              <td>{data.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default NutritionalTable;
