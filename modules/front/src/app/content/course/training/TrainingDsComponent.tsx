import React from "react";
import {injectIntl, WrappedComponentProps} from "react-intl";
import './style.css'
import TrainingDescriptionComponent from "./description/TrainingDescriptionComponent";
import {CourseData, MenuType, SelectedMenu} from "../CourseComponent";
import {CourseSection} from "../../../../cuba/entities/base/tsadv$CourseSection";
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
          restServices.tsadv_LmsService.loadCourseSectionData(getCubaREST()!, {
            enrollmentId: this.props.course!.enrollmentId!,
            courseSectionId: selectedMenu.id
          })().then((response: string) => {
            const courseSection: CourseSection = JSON.parse(response) as CourseSection;
            this.setCourseSection(courseSection);
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
    debugger;
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
                                                                     resetSectionItem={resetSectionItem}
                                                                     courseSection={this.courseSection}/></Spin>
  }
}

export default injectIntl(TrainingDsComponent);