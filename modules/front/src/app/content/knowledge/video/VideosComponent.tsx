import {MatchParams, RouteComponentProps} from "../../../common/model/RouteComponentProps";
import {observer} from "mobx-react";
import React from "react";
import {action, observable} from "mobx";
import {Course} from "../../../../cuba/entities/tsadv/tsadv$Course";
import {restServices} from "../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";
import CourseComponent, {CourseType} from "../../../common/CourseComponent/CourseComponent";
import {BoxType} from "../../../common/CourseComponent/CourseItemComponent/CourseItemComponent";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import Content from "../../Content";
import {LearningObject} from "../../../../cuba/entities/tsadv/tsadv$LearningObject";

export interface Props extends RouteComponentProps<MatchParams> {
}

@observer
class VideosComponent extends React.Component<Props> {

  @observable private videos: LearningObject[];

  componentDidMount(): void {
    restServices.tsadv_LmsService.loadVideos(getCubaREST()!)().then((response: string) => {
      const courses: LearningObject[] = JSON.parse(response);
      this.setHistoryCourses(courses);
    })
  }

  @action setHistoryCourses = (value: LearningObject[]) => {
    this.videos = value;
  };

  courseClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.props.history.push("/course/" + e.currentTarget.dataset.id);
  };

  render() {
    const VideoBody = (videos: LearningObject[]) => () => {
      return <div>{videos ?
        <CourseComponent courseType={CourseType.NO_BUTTON} boxType={BoxType.DEFAULT} courses={videos} courseClickHandler={this.courseClickHandler}/> :
        <LoadingComponent/>}</div>
    };

    const ContentComponent = Content(VideoBody(this.videos));
    return <ContentComponent headerName={"История"}/>
  }
}

export default VideosComponent;