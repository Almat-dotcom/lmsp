import * as React from "react";
import WelcomeComponent from "./welcome/WelcomeComponent";

class HomePage extends React.Component {
  render() {
    return (
      <div className={""}>
        <WelcomeComponent/>
      </div>
    );
  }
}

export default HomePage;
