import React from "react";
import styles from "./Container.module.css";

const Container = (props) => {
  return (
    <center>
      <div className={styles.cardContainer}>{props.children}</div>
    </center>
  );
};

export default Container;
