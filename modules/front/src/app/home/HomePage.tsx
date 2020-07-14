import * as React from "react";
import WelcomeComponent from "./welcome/WelcomeComponent";
import CourseComponent, {CourseType} from "../common/CourseComponent/CourseComponent";
import {BoxType} from "../common/CourseComponent/CourseItemComponent/CourseItemComponent";
import LoadingComponent from "../common/loading/LoadingComponent";
import {action, observable} from "mobx";
import {collection, DataCollectionStore, getCubaREST} from "@cuba-platform/react";
import {Course} from "../../cuba/entities/tsadv/tsadv$Course";
import {observer} from "mobx-react";
import {RouteComponentProps} from "react-router";
import {withRouter} from 'react-router-dom'
import {restServices} from "../../cuba/services";
import styles from './style.module.css'


@observer
class HomePage extends React.Component<RouteComponentProps> {
  @observable currentCourses: Course[];

  componentDidMount(): void {
    restServices.tsadv_LmsService.loadCourses(getCubaREST()!, {conditions: []})().then((response: string) => {
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
    const BodyComponent = this.currentCourses ? React.createElement(CourseComponent, {
      courses: this.currentCourses,
      boxType: BoxType.DEFAULT,
      courseType: CourseType.NO_BUTTON,
      courseClickHandler: this.courseClickHandler
    }) : React.createElement(LoadingComponent);

    return (
      <div className={""}>
        <WelcomeComponent/>
        <div className={styles["content-wrapper"]}>{BodyComponent}</div>
      </div>
    );
  }
}

export default withRouter(HomePage);
