import React from "react";
import './courses.css';
import Search from "../../../common/Search";
import {observer} from "mobx-react";
import {observable} from "mobx";
import {Course} from "../../../../cuba/entities/tsadv/tsadv$Course";
import {collection, DataCollectionStore} from "@cuba-platform/react";
import Content from "../../Content";
import CourseComponent from "../../../common/CourseWithButton/CourseComponent";

@observer
class Courses extends React.Component {

  @observable coursesDcs: DataCollectionStore<Course> = collection<Course>(Course.NAME, {view: '_local', sort: 'name'});

  render() {
    const {items} = this.coursesDcs;
    const CoursesBodyComponent = () => (
      <>
        <div className={"courses-container"}>
          <Search placeholder={"Введите название курса"}/>
          <div className={"course-items-container"}>
            <div className={"course-items"}>
              {items.map(course => (<CourseComponent course={course}/>))}
            </div>
          </div>
        </div>
      </>);
    const CoursesComponent = Content(CoursesBodyComponent);
    return <CoursesComponent headerName={"курсы"}/>;
  }
}

export default Courses;