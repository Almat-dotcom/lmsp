import React from "react";
import defaultImgSrc from "../../../common/materialContainer/material/default-logo.png";
import {injectIntl, WrappedComponentProps} from "react-intl";
import './style.css'
import {action, observable} from "mobx";
import {CourseData, CourseSectionItem} from "../CourseComponent";
import {Modal} from "antd";
import {CourseSection} from "../../../../cuba/entities/tsadv/tsadv$CourseSection";

interface SectionListComponentProps {
  course: CourseData,
  selectedCourseSection: CourseSection | null
}

interface SectionListComponentHandlers {
  followToCourse: () => void,
  setCourseSection: (courseSectionId: string | null) => void
}

class SectionListComponent extends React.Component<SectionListComponentProps & WrappedComponentProps & SectionListComponentHandlers> {

  @observable selectedSectionElement: HTMLLIElement | null = null;

  @action setSelectedSectionElement(value: HTMLLIElement) {
    if (this.props.selectedCourseSection && (this.props.selectedCourseSection.id === value.dataset.id)) {
      this.props.setCourseSection(null);
    } else {
      this.props.setCourseSection(value.dataset.id as string);
    }
  }

  sectionClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    this.setSelectedSectionElement(e.currentTarget);
  };

  followClickHandler = () => {
    Modal.confirm({
      title: this.props.intl.formatMessage({id: "knowledge.courses.modal.title"}),
      okText: this.props.intl.formatMessage({id: "knowledge.courses.modal.ok"}),
      cancelText: this.props.intl.formatMessage({id: "knowledge.courses.modal.cancel"}),
      onOk: () => {
        this.props.followToCourse();
      }
    });
  };

  render() {
    const {course, selectedCourseSection} = this.props;

    let imgSrc: string;
    if (course.logo) {
      imgSrc = "data:image/png;base64," + course.logo;
    } else {
      imgSrc = defaultImgSrc;
    }

    return <div className={"sections-container"}>
      <img src={imgSrc}/>
      <ul className={"sections-list"}>
        {course.enrollmentId != null ?
          course.sections!.map((section: CourseSectionItem) => (
            <li
              className={"list" + (section.isPassed ? " passed" : "") + (selectedCourseSection ? selectedCourseSection.id === section.id ? " section-active" : "" : "")}
              onMouseUp={this.sectionClickHandler}
              data-id={section.id}>
              <div className={"title"}>{section.sectionName}</div>
              <div className={"format"}>{section.langValue1}</div>
            </li>)) :
          <li className={"button-list"}>
            <button onClick={this.followClickHandler}>{this.props.intl.formatMessage({id: "follow"})}</button>
          </li>}
      </ul>
    </div>

  }
}

export default injectIntl(SectionListComponent);