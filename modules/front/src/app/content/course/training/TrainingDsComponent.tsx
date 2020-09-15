import React from "react";
import {injectIntl, WrappedComponentProps} from "react-intl";
import './style.css'
import TrainingDescriptionComponent from "./description/TrainingDescriptionComponent";
import {CourseData, MenuType, SelectedMenu} from "../CourseComponent";
import {CourseSection} from "../../../../cuba/entities/tsadv/tsadv$CourseSection";
import {observer} from "mobx-react";
import {trainingBodyMap} from "./TrainingBodyMap";
import {CourseSectionFormat} from "../../../../cuba/enums/enums";
import {action, observable} from "mobx";
import TrainingComponent from "./TrainingComponent";
import {Spin} from "antd";
import {restServices} from "../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";
import FeedbackComponent, {FeedbackCourse} from "./feedback/FeedbackComponent";

interface TrainingDsComponentProps {
  course: CourseData,
  selectedMenu: SelectedMenu | null
}

export interface TrainingComponentHandlers {
  resetSectionItem?: () => void
}

@observer
class TrainingDsComponent extends React.Component<TrainingDsComponentProps & TrainingComponentHandlers & WrappedComponentProps> {

  @observable courseSection: CourseSection | null = null;

  @observable loadingTrainingBody: boolean = false;

  @observable courseFeedback: FeedbackCourse[] | null = null;

  componentDidMount(): void {
    const {selectedMenu} = this.props;
    if (selectedMenu) {
      this.setLoadingTrainingBody(true);
      switch (selectedMenu.menuType) {
        case MenuType.SECTION: {
          // getCubaREST()!.loadEntity<CourseSection>(CourseSection.NAME, selectedMenu.id, {view: 'course.section.with.format.session'}).then((response: CourseSection) => {
          //   this.courseSection = response;
          // }).finally(() => this.setLoadingTrainingBody(false));
          // break;
          restServices.tsadv_LmsService.loadCourseSectionData(getCubaREST()!, {
            enrollmentId: this.props.course!.enrollmentId!,
            courseSectionId: selectedMenu.id
          })().then((response: string) => {
            this.courseSection = JSON.parse(response);
            if (this.props.course && this.props.course.sections) {
              this.props.course.sections.find(s => s.id === this.props.selectedMenu!.id)!.isPassed = true;
            }
          }).finally(() => this.setLoadingTrainingBody(false));
          break;
        }
        case MenuType.FEEDBACK: {
          restServices.tsadv_LmsService.loadFeedbackData(getCubaREST()!, {feedbackTemplateId: selectedMenu.id})()
            .then((response: string) => {
              this.setCourseFeedback(JSON.parse(response))
              // this.courseSection = response;
            }).finally(() => this.setLoadingTrainingBody(false));
          break;
        }
      }
    } else {
      this.courseSection = null;
    }
  }

  @action setCourseSection = (value: CourseSection) => {
    this.courseSection = value;
  };

  @action setLoadingTrainingBody = (value: boolean) => {
    this.loadingTrainingBody = value;
  };

  @action setCourseFeedback = (value: FeedbackCourse[] | null) => {
    this.courseFeedback = value;
  };

  render() {
    const {course, selectedMenu, resetSectionItem} = this.props;

    return selectedMenu != null && selectedMenu.menuType === MenuType.FEEDBACK
      ? <FeedbackComponent courseId={course.id} feedbacks={this.courseFeedback}
                           templateId={selectedMenu.id}
                           okFinishFeedbackHandler={resetSectionItem}/>
      : <Spin spinning={this.loadingTrainingBody}><TrainingComponent course={this.props.course}
                                                                        courseSection={this.courseSection}/></Spin>
  }
}

const getTrainingBody = (courseSection: CourseSection, enrollmentId: string | null, handlers: TrainingComponentHandlers): React.ClassType<any, any, any> => {
  const courseFormat: CourseSectionFormat = CourseSectionFormat[courseSection!.format.code!.toUpperCase()] as CourseSectionFormat;
  return React.createElement(trainingBodyMap.get(courseFormat)!, {
    ...courseSection,
    enrollmentId: enrollmentId, ...handlers
  })
};

export default injectIntl(TrainingDsComponent);