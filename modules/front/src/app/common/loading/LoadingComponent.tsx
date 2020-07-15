import React from "react";
import loader from './loader.svg'
import styles from './style.module.css'

export interface LoadingComponentProps {
  loadText?: string
}

const LoadingComponent = ({loadText}: LoadingComponentProps) => {
  return <div className={styles["loader-container"]}>
    <img src={loader} alt="loader"/>
    {loadText ? loadText : "Подождите, идет загрузка данных"}</div>
};

export default LoadingComponent;