import React from 'react'
import {getCubaREST} from "@cuba-platform/react";
import Content from "../../Content";
import {restServices} from "../../../../cuba/services";
import {Course} from "../../../../cuba/entities/tsadv/tsadv$Course";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import CourseComponent, {CourseType} from "../../../common/CourseComponent/CourseComponent";
import {BoxType} from "../../../common/CourseComponent/CourseItemComponent/CourseItemComponent";
import {MatchParams, RouteComponentProps} from "../../../common/model/RouteComponentProps";

export interface Props extends RouteComponentProps<MatchParams> {
}

@observer
class CurrentCourses extends React.Component<Props> {

  @observable currentCourses: Course[];

  componentDidMount(): void {
    restServices.tsadv_LmsService.getPersonCourses(getCubaREST()!)().then((response: string) => {
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
    const bodyComponent = (currentCourses: any) => () => {
      return (
        <div className={"course-items-container"}>
          <div className={"course-items"}>
            {currentCourses != undefined ?
              <CourseComponent courses={currentCourses} courseType={CourseType.NO_BUTTON} boxType={BoxType.DEFAULT}
                               courseClickHandler={this.courseClickHandler}/> :
              <LoadingComponent/>}
          </div>
        </div>)
    };
    const ContentComponent = Content(bodyComponent(this.currentCourses));
    return <ContentComponent headerName={"текущие курсы"}/>;
  }
}

export default CurrentCourses