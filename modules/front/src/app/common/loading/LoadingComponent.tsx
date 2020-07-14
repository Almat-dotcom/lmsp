import React from "react";
import loader from './loader.svg'
import styles from './style.module.css'

const LoadingComponent = () => {
  return <div className={styles["loader-container"]}>
    <img src={loader} alt="loader"/>
    Подождите, идет загрузка данных</div>
};

export default LoadingComponent;