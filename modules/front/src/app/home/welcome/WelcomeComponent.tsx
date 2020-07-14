import React from "react";
import {FormattedMessage} from "react-intl";
import styles from './style.module.css'
import welcomeImage from './welcome.jpeg'

class WelcomeComponent extends React.Component {
  render() {
    return <div className={styles["welcome-container"]}>
      <div className={styles["title"]}><h1><FormattedMessage id="welcome.project.name"/></h1></div>
      <img src={welcomeImage} alt="welcome"/>
    </div>
  }
}

export default WelcomeComponent;