import * as React from "react";
import WelcomeComponent from "./welcome/WelcomeComponent";
import {BoxType} from "../common/materialContainer/material/MaterialComponent";
import LoadingComponent from "../common/loading/LoadingComponent";
import {action, observable} from "mobx";
import {getCubaREST} from "@cuba-platform/react";
import {Course} from "../../cuba/entities/tsadv/tsadv$Course";
import {observer} from "mobx-react";
import {RouteComponentProps} from "react-router";
import {withRouter} from 'react-router-dom'
import {restServices} from "../../cuba/services";
import styles from './style.module.css'
import MaterialContainerComponent, {MaterialType} from "../common/materialContainer/MaterialContainerComponent";


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
    const BodyComponent = this.currentCourses ? React.createElement(MaterialContainerComponent, {
      materialData: this.currentCourses,
      boxType: BoxType.DEFAULT,
      materialType: MaterialType.NO_BUTTON,
      materialClickHandler: this.courseClickHandler
    }) : React.createElement(LoadingComponent);

    return (
      <div className={""}>
        {/*<WelcomeComponent/>*/}
        <div className={styles["content-wrapper"]}>{BodyComponent}</div>
      </div>
    );
  }
}

export default withRouter(HomePage);
