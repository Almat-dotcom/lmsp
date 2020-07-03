import React from "react";
import Search from "../../../common/Search";
import {observer} from "mobx-react";
import {observable} from "mobx";
import {Course} from "../../../../cuba/entities/tsadv/tsadv$Course";
import {collection, DataCollectionStore} from "@cuba-platform/react";
import Content from "../../Content";
import CourseComponent, {CourseType} from "../../../common/CourseComponent/CourseComponent";
import {injectIntl, WrappedComponentProps} from "react-intl";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import {withRouter} from 'react-router-dom'
import {RouteComponentProps} from "react-router";
import {BoxType} from "../../../common/CourseComponent/CourseItemComponent/CourseItemComponent";

@observer
class Courses extends React.Component<WrappedComponentProps & RouteComponentProps> {

  @observable coursesDcs: DataCollectionStore<Course> = collection<Course>(Course.NAME, {view: '_local', sort: 'name'});

  courseClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.props.history.push("/course/" + e.currentTarget.dataset.id);
  };

  render() {
    const {items} = this.coursesDcs;
    const CoursesBodyComponent = () => {
      const BodyComponent = this.coursesDcs ? React.createElement(CourseComponent, {
        courses: items,
        boxType: BoxType.DEFAULT,
        courseType: CourseType.NO_BUTTON,
        courseClickHandler: this.courseClickHandler
      }) : React.createElement(LoadingComponent);
      return <>
        <div className={"courses-container"}>
          <Search placeholder={"Введите название курса"}/>
          {BodyComponent}
        </div>
      </>
    };
    const CoursesComponent = Content(CoursesBodyComponent);
    return <CoursesComponent headerName={"курсы"}/>;
  }
}

export default injectIntl(withRouter(Courses));