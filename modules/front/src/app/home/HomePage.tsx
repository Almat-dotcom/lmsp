import * as React from "react";
import WelcomeComponent from "./welcome/WelcomeComponent";
import CourseComponent, {CourseType} from "../common/CourseComponent/CourseComponent";
import {BoxType} from "../common/CourseComponent/CourseItemComponent/CourseItemComponent";
import LoadingComponent from "../common/loading/LoadingComponent";
import {observable} from "mobx";
import {collection, DataCollectionStore} from "@cuba-platform/react";
import {Course} from "../../cuba/entities/tsadv/tsadv$Course";
import {observer} from "mobx-react";
import {RouteComponentProps} from "react-router";
import {withRouter} from 'react-router-dom'

@observer
class HomePage extends React.Component<RouteComponentProps> {
  @observable coursesDcs: DataCollectionStore<Course> = collection<Course>(Course.NAME, {view: '_local', sort: 'name'});

  courseClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.props.history.push("/course/" + e.currentTarget.dataset.id);
  };

  render() {
    const {items} = this.coursesDcs;

    const BodyComponent = this.coursesDcs ? React.createElement(CourseComponent, {
      courses: items,
      boxType: BoxType.DEFAULT,
      courseType: CourseType.NO_BUTTON,
      courseClickHandler: this.courseClickHandler
    }) : React.createElement(LoadingComponent);

    return (
      <div className={""}>
        <WelcomeComponent/>
        {BodyComponent}
      </div>
    );
  }
}

export default withRouter(HomePage);
