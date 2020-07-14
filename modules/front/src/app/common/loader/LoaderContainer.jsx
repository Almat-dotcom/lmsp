import React from 'react'
import styles from './style.module.css'
import loader from './loader.svg'

class LoaderContainer extends React.Component {
  render() {
    return <div className={styles["loader-wrapper"]}>
      <div className={styles["loader-container"]}>
        <img src={loader} className={styles["loader-svg"]}/>
        <span>Пожалуйста подождите, идёт загрузка данных...</span>
      </div>
    </div>
  }
}

export default LoaderContainer