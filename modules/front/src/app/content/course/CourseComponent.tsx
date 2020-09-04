import React from "react";
import Content from "../Content";
import {observer} from "mobx-react";
import {action, observable} from "mobx";
import {getCubaREST} from "@cuba-platform/react";
import './style.css'
import {MatchParams, RouteComponentProps} from "../../common/model/RouteComponentProps";
import {injectIntl, WrappedComponentProps} from "react-intl";
import LoadingComponent from "../../common/loading/LoadingComponent";
import TrainingComponent from "./training/TrainingComponent";
import SectionListComponent from "./list/SectionListComponent";
import {restServices} from "../../../cuba/services";
import {CourseSection} from "../../../cuba/entities/tsadv/tsadv$CourseSection";
import {Spin} from "antd";
import FeedbackComponent, {FeedbackCourse} from "./training/feedback/FeedbackComponent";

interface Props extends RouteComponentProps<MatchParams> {
}

export interface CourseData {
  id: string,
  name?: string,
  enrollmentId: string | null,
  description: string,
  logo?: string,
  sections?: CourseSectionItem[]
  courseFeedbacks?: CourseFeedback[]
}

export interface CourseSectionItem {
  id: string,
  sectionName: string,
  order: number,
  isPassed: boolean,
  langValue1: string
}

export interface CourseFeedback {
  id: string,
  name: string
}

export enum MenuType {
  SECTION = "SECTION",
  FEEDBACK = "FEEDBACK"
}

export interface SelectedMenu {
  id: string,
  menuType: MenuType
}

@observer
class CourseComponent extends React.Component<Props & WrappedComponentProps> {

  @observable course: CourseData | undefined = undefined;

  @observable selectedMenu: SelectedMenu | null = null;

  @observable courseSection: CourseSection | null = null;

  @observable loadingTrainingBody: boolean = false;

  @observable courseFeedback: FeedbackCourse[] | null = null;

  componentDidMount(): void {
    this.refreshCourseCard();
  }

  @action setCourse = (value: CourseData) => {
    this.course = value;
  };

  @action setSelectedMenu = (value: SelectedMenu | null) => {
    this.selectedMenu = value;
    this.setCourseSection(this.selectedMenu);
  };

  @action setLoadingTrainingBody = (value: boolean) => {
    this.loadingTrainingBody = value;
  };


  @action setCourseFeedback = (value: FeedbackCourse[] | null) => {
    this.courseFeedback = value;
  };

  @action refreshCourseCard = () => {
    restServices.tsadv_LmsService.loadCourseData(getCubaREST()!, {courseId: this.props.match.params.id})().then(response => {
      const course: CourseData = JSON.parse(response as string);
      this.setCourse(course);
    });
  };

  @action followToCourse = () => {
    restServices.tsadv_LmsService.registerToCourse(getCubaREST()!, {courseId: this.props.match.params.id})().then(response => {
      this.refreshCourseCard();
    });
  };

  @action resetSectionItem = () => {
    this.setSelectedMenu(null);
  };

  @action setCourseSection = (selectedMenu: SelectedMenu | null) => {
    if (selectedMenu) {
      this.setLoadingTrainingBody(true);
      switch (selectedMenu.menuType) {
        case MenuType.SECTION: {
          getCubaREST()!.loadEntity<CourseSection>(CourseSection.NAME, selectedMenu.id, {view: 'course.section.with.format.session'}).then((response: CourseSection) => {
            this.courseSection = response;
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
  };

  render() {
    const CourseComponent = (
      course: CourseData | undefined,
      selectedMenu: SelectedMenu | null,
      courseSection: CourseSection | null,
      loadingTrainingBody: boolean,
      courseFeedback: FeedbackCourse[] | null) => () => {
      return <div className={"course-container"}>
        {course ? <>
            <div className={"sections-list-wrapper"}><SectionListComponent course={course}
                                                                           selectedMenu={selectedMenu}
                                                                           followToCourse={this.followToCourse}
                                                                           setSelectedMenu={this.setSelectedMenu}/>
            </div>
            <div className={"section-training-wrapper"}>
              <Spin spinning={loadingTrainingBody}>
                {selectedMenu != null && selectedMenu.menuType === MenuType.FEEDBACK
                  ? <FeedbackComponent courseId={course.id} feedbacks={courseFeedback} templateId={selectedMenu.id}
                                       okFinishFeedbackHandler={this.resetSectionItem}/>
                  : <TrainingComponent
                    course={course}
                    courseSection={courseSection}
                    resetSectionItem={this.resetSectionItem}/>}
              </Spin>
            </div>
          </> :
          <LoadingComponent/>}
      </div>
    };

    const ContentComponent = Content(CourseComponent(this.course, this.selectedMenu, this.courseSection,
      this.loadingTrainingBody, this.courseFeedback));
    return <ContentComponent headerName={"Курс: " + (this.course ? this.course.name! : "")}
                             wrapperCss={{padding: 0}}
                             contentWrapperCss={{padding: '50px'}}/>;
  }
}

export default injectIntl(CourseComponent);