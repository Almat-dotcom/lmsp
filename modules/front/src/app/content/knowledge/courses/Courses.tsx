import React from "react";
import './courses.css';
import Search from "../../../common/Search";
import {observer} from "mobx-react";
import {observable} from "mobx";
import {Course} from "../../../../cuba/entities/tsadv/tsadv$Course";
import {collection, DataCollectionStore} from "@cuba-platform/react";
import CourseComponent from "./course/CourseComponent";

@observer
class Courses extends React.Component {

  @observable coursesDcs: DataCollectionStore<Course> = collection<Course>(Course.NAME, {view: '_local', sort: 'name'});

  render() {
    const {items} = this.coursesDcs;
    return <div className={"courses-container"}>
      <div className={"courses-container-wrapper"}>
        <div className={"courses-container-content"}>
          <h1 className={"courses-container-header"}>курсы</h1>
          <hr/>
          <Search placeholder={"Введите название курса"}/>
          <div className={"course-items-container"}>
            <div className={"course-items"}>
              {items.map(course => (<CourseComponent course={course}/>))}
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Courses;