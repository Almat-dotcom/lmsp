import React from "react";
import Search from "../../../common/Search";
import {observer} from "mobx-react";
import {observable} from "mobx";
import {Course} from "../../../../cuba/entities/tsadv/tsadv$Course";
import {collection, DataCollectionStore} from "@cuba-platform/react";
import Content from "../../Content";
import CourseComponent, {CourseType} from "../../../common/CourseComponent/CourseComponent";

@observer
class Courses extends React.Component {

  @observable coursesDcs: DataCollectionStore<Course> = collection<Course>(Course.NAME, {view: '_local', sort: 'name'});

  render() {
    const {items} = this.coursesDcs;
    const CoursesBodyComponent = () => (
      <>
        <div className={"courses-container"}>
          <Search placeholder={"Введите название курса"}/>
          <CourseComponent courses={items} courseType={CourseType.DEFAULT}/>
        </div>
      </>);
    const CoursesComponent = Content(CoursesBodyComponent);
    return <CoursesComponent headerName={"курсы"}/>;
  }
}

export default Courses;