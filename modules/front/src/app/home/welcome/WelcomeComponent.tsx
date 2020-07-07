import React from "react";
import {FormattedMessage} from "react-intl";
import './style.css'

class WelcomeComponent extends React.Component {
  render() {
    return <div className={"welcome-container"}>
      <h1>
        <FormattedMessage id="welcome.project.name"/>
      </h1>
    </div>
  }
}

export default WelcomeComponent;