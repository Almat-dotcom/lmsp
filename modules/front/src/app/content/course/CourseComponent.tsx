import React from "react";
import Content from "../Content";
import {observer} from "mobx-react";
import {action, observable} from "mobx";
import {getCubaREST} from "@cuba-platform/react";
import "./style.css";
import {
  MatchParams,
  RouteComponentProps
} from "../../common/model/RouteComponentProps";
import {injectIntl, WrappedComponentProps} from "react-intl";
import LoadingComponent from "../../common/loading/LoadingComponent";
import SectionListComponent from "./list/SectionListComponent";
import {restServices} from "../../../cuba/services";
import TrainingDsComponent from "./training/TrainingDsComponent";
import {isNullOrUndefined} from "util";

interface Props extends RouteComponentProps<MatchParams> {
}

export interface CourseData {
  id: string;
  name?: string;
  enrollmentId: string | null;
  selfEnrollment: boolean;
  description: string;
  logo?: string;
  sections?: CourseSectionItem[];
  courseFeedbacks?: CourseFeedback[];
}

export interface CourseSectionItem {
  id: string;
  sectionName: string;
  order: number;
  isPassed: boolean;
  langValue1: string;
}

export interface CourseFeedback {
  id: string;
  name: string;
}

export enum MenuType {
  SECTION = "SECTION",
  FEEDBACK = "FEEDBACK"
}

export interface SelectedMenu {
  id: string;
  menuType: MenuType;
}

@observer
class CourseComponent extends React.Component<Props & WrappedComponentProps> {
  @observable course: CourseData | undefined = undefined;

  @observable selectedMenu: SelectedMenu | null = null;

  componentDidMount(): void {
    this.refreshCourseCard();
  }

  @action setCourse = (value: CourseData) => {
    this.course = value;
  };

  @action setSelectedMenu = (value: SelectedMenu | null) => {
    this.selectedMenu = value;
  };

  @action refreshCourseCard = () => {
    restServices.tsadv_LmsService
      .loadCourseData(getCubaREST()!, {
        courseId: this.props.match.params.id
      })()
      .then(response => {
        const course: CourseData = JSON.parse(response as string);
        this.setCourse(course);
      });
  };

  @action followToCourse = () => {
    restServices.tsadv_LmsService
      .registerToCourse(getCubaREST()!, {
        courseId: this.props.match.params.id
      })()
      .then(response => {
        this.refreshCourseCard();
      });
  };

  @action resetSectionItem = () => {
    this.setSelectedMenu(null);
  };

  goToCourseMainPage(courseId: string | undefined): void {
    if (this.selectedMenu !== null) {
      this.resetSectionItem();
    }
  }

  render() {
    const CourseComponent = (
      <div className={"course-container"}>
        {this.course ? (
          <>
            <div className={"sections-list-wrapper"}>
              <SectionListComponent
                course={this.course}
                selectedMenu={this.selectedMenu}
                followToCourse={this.followToCourse}
                setSelectedMenu={this.setSelectedMenu}
              />
            </div>
            <div className={"section-training-wrapper"}>
              <TrainingDsComponent
                history={this.props.history}
                course={this.course}
                resetSectionItem={this.resetSectionItem}
                selectedMenu={this.selectedMenu}
              />
            </div>
          </>
        ) : (
          <LoadingComponent/>
        )}
      </div>
    );
    const ContentComponent = Content(CourseComponent, {
      headerName: "Курс: " + (this.course ? this.course.name! : ""),
      wrapperCss: {padding: 0},
      onHeaderClick: () => this.goToCourseMainPage(this.course ? this.course.id : undefined)
    });
    return <ContentComponent/>;
  }
}

export default injectIntl(CourseComponent);
