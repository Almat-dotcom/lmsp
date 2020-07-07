import React from "react";
import Search from "../../../common/Search";
import {observer} from "mobx-react";
import {action, observable} from "mobx";
import {Course} from "../../../../cuba/entities/tsadv/tsadv$Course";
import {collection, DataCollectionStore, getCubaREST} from "@cuba-platform/react";
import Content from "../../Content";
import CourseComponent, {CourseType} from "../../../common/CourseComponent/CourseComponent";
import {injectIntl, WrappedComponentProps} from "react-intl";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import {withRouter} from 'react-router-dom'
import {RouteComponentProps} from "react-router";
import {BoxType} from "../../../common/CourseComponent/CourseItemComponent/CourseItemComponent";
import {Condition} from "@cuba-platform/rest";
import {restServices} from "../../../../cuba/services";

@observer
class Courses extends React.Component<WrappedComponentProps & RouteComponentProps> {

  @observable currentCourses: Course[];

  componentDidMount(): void {
    restServices.tsadv_LmsService.loadCourses(getCubaREST()!)().then((response: string) => {
      const courses: Course[] = JSON.parse(response);
      this.setCurrentCourses(courses);
    });
  }

  @action setCurrentCourses = (currentCourses: any) => {
    this.currentCourses = currentCourses;
  };

  courseClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.props.history.push("/course/" + e.currentTarget.dataset.id);
  };

  render() {
    const CoursesBodyComponent = (currentCourses: Course[]) => () => {
      const BodyComponent = currentCourses ? React.createElement(CourseComponent, {
        courses: currentCourses,
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
    const CoursesComponent = Content(CoursesBodyComponent(this.currentCourses));
    return <CoursesComponent headerName={"курсы"}/>;
  }
}

export default injectIntl(withRouter(Courses));