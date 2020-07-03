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
import {MatchParams, RouteComponentProps} from "../../../common/model/RouteComponentProps";

export interface Props extends RouteComponentProps<MatchParams> {
}

@observer
class HistoryComponent extends React.Component<Props> {

  @observable private historyCourses: Course[];

  componentDidMount(): void {
    restServices.tsadv_LmsService.getPersonHistory(getCubaREST()!)().then((response: string) => {
      const courses: Course[] = JSON.parse(response);
      console.log(response);
      this.setHistoryCourses(courses);
    })
  }

  @action setHistoryCourses = (value: Course[]) => {
    this.historyCourses = value;
  };

  courseClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.props.history.push("/course/" + e.currentTarget.dataset.id);
  };

  render() {
    const HistoryBody = (historyCourses: Course[]) => () => {
      return <div>{historyCourses ?
        <CourseComponent courseType={CourseType.NO_BUTTON} boxType={BoxType.DEFAULT} courses={historyCourses} courseClickHandler={this.courseClickHandler}/> :
        <LoadingComponent/>}</div>
    };

    const ContentComponent = Content(HistoryBody(this.historyCourses));
    return <ContentComponent headerName={"История"}/>
  }
}

export default HistoryComponent;