import React from "react";
import Content from "../Content";
import {observer} from "mobx-react";
import {action, observable} from "mobx";
import {DataInstanceStore, getCubaREST} from "@cuba-platform/react";
import {Course} from "../../../cuba/entities/tsadv/tsadv$Course";
import './style.css'
import {MatchParams, RouteComponentProps} from "../../common/model/RouteComponentProps";
import {injectIntl, WrappedComponentProps} from "react-intl";
import LoadingComponent from "../../common/loading/LoadingComponent";
import TrainingComponent from "./training/TrainingComponent";
import SectionListComponent from "./list/SectionListComponent";
import {restServices} from "../../../cuba/services";
import {CourseSection} from "../../../cuba/entities/tsadv/tsadv$CourseSection";

interface Props extends RouteComponentProps<MatchParams> {
}

export interface CourseData {
  id: string,
  name?: string,
  hasEnrollment: boolean,
  description: string,
  logo?: string,
  sections?: CourseSectionItem[]
}

export interface CourseSectionItem {
  id: string,
  sectionName: string,
  order: number,
  isPassed: boolean,
  langValue1: string
}

@observer
class CourseComponent extends React.Component<Props & WrappedComponentProps> {

  @observable course: CourseData | undefined = undefined;

  @observable selectedCourseSection: CourseSection | null = null;

  componentDidMount(): void {
    this.refreshCourseCard();
  }

  @action setCourse = (value: CourseData) => {
    this.course = value;
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

  @action setCourseSection = (courseSectionId: string | null) => {
    console.log(courseSectionId);
    if (courseSectionId) {
      getCubaREST()!.loadEntity<CourseSection>(CourseSection.NAME, courseSectionId, {view: 'course.section.with.format.session'}).then((response: CourseSection) => {
        this.selectedCourseSection = response;
      });
    } else {
      this.selectedCourseSection = null;
    }
  };

  render() {
    const CourseComponent = (course: CourseData | undefined, courseSection: CourseSection | null, selectedCourseSection: CourseSection | null) => () => {
      return <div className={"course-container"}>
        {course ? <>
            <div className={"sections-list-wrapper"}><SectionListComponent course={course}
                                                                           selectedCourseSection={selectedCourseSection}
                                                                           followToCourse={this.followToCourse}
                                                                           setCourseSection={this.setCourseSection}/>
            </div>
            <div className={"section-training-wrapper"}><TrainingComponent course={course} courseSection={courseSection}/>
            </div>
          </> :
          <LoadingComponent/>}
      </div>
    };

    const ContentComponent = Content(CourseComponent(this.course, this.selectedCourseSection, this.selectedCourseSection));
    return <ContentComponent headerName={"Курс: " + (this.course ? this.course.name! : "")} wrapperCss={{padding: 0}}
                             contentWrapperCss={{padding: '50px'}}/>;
  }
}

export default injectIntl(CourseComponent);