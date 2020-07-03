import React from "react";
import Content from "../../Content";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import CourseComponent, {CourseType} from "../../../common/CourseComponent/CourseComponent";
import {Course} from "../../../../cuba/entities/tsadv/tsadv$Course";
import {restServices} from "../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import {BoxType} from "../../../common/CourseComponent/CourseItemComponent/CourseItemComponent";

@observer
class HistoryComponent extends React.Component {

  @observable private historyCourses: Course[];

  componentDidMount(): void {
    restServices.tsadv_LmsService.getPersonHistory(getCubaREST()!)().then((response: string) => {
      const courses: Course[] = JSON.parse(response);
      this.setHistoryCourses(courses);
    })
  }

  @action setHistoryCourses = (value: Course[]) => {
    this.historyCourses = value;
  };

  render() {
    const HistoryBody = (historyCourses: Course[]) => () => {
      return <div>{historyCourses ?
        <CourseComponent courseType={CourseType.NO_BUTTON} boxType={BoxType.DEFAULT} courses={historyCourses}/> :
        <LoadingComponent/>}</div>
    };

    const ContentComponent = Content(HistoryBody(this.historyCourses));
    return <ContentComponent headerName={"История"}/>
  }
}

export default HistoryComponent;