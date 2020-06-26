import React from "react";
import './courses.css';
import Search from "../../common/Search";
import {observer} from "mobx-react";
import {observable} from "mobx";

@observer
class Courses extends React.Component {
  render() {
    return <div className={"courses-container"}>
      <div className={"courses-container-wrapper"}>
        <div className={"courses-container-content"}>
          <h1 className={"courses-container-header"}>курсы</h1>
          <Search />
        </div>
      </div>
    </div>
  }
}

export default Courses;