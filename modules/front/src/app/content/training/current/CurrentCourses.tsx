import React from 'react'
import {getCubaREST} from "@cuba-platform/react";
import Content from "../../Content";
import {restServices} from "../../../../cuba/services";
import {Course} from "../../../../cuba/entities/tsadv/tsadv$Course";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import CourseComponent, {CourseType} from "../../../common/CourseComponent/CourseComponent";

@observer
class CurrentCourses extends React.Component {

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

  render() {
    const bodyComponent = (currentCourses: any) => () => {
      return (
        <div className={"course-items-container"}>
          <div className={"course-items"}>
            {currentCourses != undefined ?
              <CourseComponent courses={currentCourses} courseType={CourseType.NO_BUTTON}/> : <LoadingComponent/>}
          </div>
        </div>)
    };
    console.log(this.currentCourses);
    const ContentComponent = Content(bodyComponent(this.currentCourses));
    return <ContentComponent headerName={"текущие курсы"}/>;
  }
}

export default CurrentCourses