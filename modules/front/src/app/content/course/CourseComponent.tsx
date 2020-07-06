import React from "react";
import Content from "../Content";
import {observer} from "mobx-react";
import {action, observable} from "mobx";
import {getCubaREST} from "@cuba-platform/react";
import {Course} from "../../../cuba/entities/tsadv/tsadv$Course";
import './style.css'
import defaultImgSrc from "../../common/CourseComponent/CourseItemComponent/course-min.png";
import {MatchParams, RouteComponentProps} from "../../common/model/RouteComponentProps";
import {injectIntl, WrappedComponentProps} from "react-intl";
import LoadingComponent from "../../common/loading/LoadingComponent";
import TrainingComponent from "./training/TrainingComponent";
import SectionListComponent from "./list/SectionListComponent";
import {restServices} from "../../../cuba/services";

interface Props extends RouteComponentProps<MatchParams> {
}

@observer
class CourseComponent extends React.Component<Props & WrappedComponentProps> {

  @observable course: Course | undefined = undefined;

  @observable isRegistered: boolean | undefined = undefined;

  componentDidMount(): void {
    getCubaREST()!.loadEntity(Course.NAME, this.props.match.params.id, {view: 'course.tree'}).then(response => {
      this.setCourse(response as Course);
    });
    restServices.tsadv_LmsService.hasEnrollment(getCubaREST()!, {courseId: this.props.match.params.id})().then(response => {
      this.setIsRegistered(response === 'true');
    })
  }

  @action setIsRegistered(value: boolean) {
    this.isRegistered = value;
  }

  @action setCourse = (course: Course) => {
    this.course = course;
  };

  render() {
    const CourseComponent = (isRegistered: boolean | undefined, course: Course | undefined) => () => {
      return <div className={"course-container"}>
        {course ? <>
            <div className={"sections-list-wrapper"}><SectionListComponent isRegistered={isRegistered} course={course}/>
            </div>
            <div className={"section-training-wrapper"}><TrainingComponent isRegistered={isRegistered}
                                                                           course={course}/></div>
          </> :
          <LoadingComponent/>}
      </div>
    };

    const ContentComponent = Content(CourseComponent(this.isRegistered, this.course));
    return <ContentComponent headerName={"Курс: " + (this.course ? this.course.name! : "")} wrapperCss={{padding: 0}}
                             contentWrapperCss={{padding: '50px'}}/>;
  }
}

export default injectIntl(CourseComponent);