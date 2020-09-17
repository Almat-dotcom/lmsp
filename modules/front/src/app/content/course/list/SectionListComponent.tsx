import React from "react";
import defaultImgSrc from "../../../common/materialContainer/material/default-logo.png";
import {injectIntl, WrappedComponentProps} from "react-intl";
import './style.css'
import {action, observable} from "mobx";
import {CourseData, CourseFeedback, CourseSectionItem, MenuType, SelectedMenu} from "../CourseComponent";
import {Modal} from "antd";

interface SectionListComponentProps {
  course: CourseData,
  selectedMenu: SelectedMenu | null
}

interface SectionListComponentHandlers {
  followToCourse: () => void,
  setSelectedMenu: (selectedMenu: SelectedMenu | null) => void
}

class SectionListComponent extends React.Component<SectionListComponentProps & WrappedComponentProps & SectionListComponentHandlers> {

  @observable selectedSectionElement: HTMLLIElement | null = null;

  @action setSelectedSectionElement(value: HTMLLIElement, menuType: MenuType) {
    if (this.props.selectedMenu && (this.props.selectedMenu.id === value.dataset.id)) {
      this.props.setSelectedMenu(null);
    } else {
      const selectedMenu: SelectedMenu = {
        id: value.dataset.id as string,
        menuType: menuType
      };
      this.props.setSelectedMenu(selectedMenu);
    }
  }

  sectionClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    this.setSelectedSectionElement(e.currentTarget, MenuType.SECTION);
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

  feedbackClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    this.setSelectedSectionElement(e.currentTarget, MenuType.FEEDBACK);
  };

  render() {
    const {course, selectedMenu} = this.props;

    let imgSrc: string;
    if (course.logo) {
      imgSrc = "data:image/png;base64," + course.logo;
    } else {
      imgSrc = defaultImgSrc;
    }

    return <div className={"sections-container"}>
      <img src={imgSrc}/>
      <div className="section-container">
        {course.enrollmentId != null
          ? <>
            <div className={"section-title"}>
              Разделы
            </div>
            <ul className={"sections-list"}>
              {course.sections!.map((section: CourseSectionItem) => (
                <li
                  key={section.id}
                  className={"list" + (section.isPassed ? " passed" : "") + (selectedMenu ? selectedMenu.id === section.id ? " section-active" : "" : "")}
                  onMouseUp={this.sectionClickHandler}
                  data-id={section.id}>
                  <div className={"title"}>{section.sectionName}</div>
                  <div className={"format"}>{section.langValue1}</div>
                </li>))}
            </ul>
          </>
          : course.selfEnrollment
            ? <button className="follow-btn" onClick={this.followClickHandler}>{this.props.intl.formatMessage({id: "follow"})}</button>
            : <></>}
      </div>
      {course.enrollmentId != null && course.courseFeedbacks && course.courseFeedbacks.length > 0
        ?
        <div className="section-container">
          <div className={"section-title"}>
            Анкеты обратной связи
          </div>
          <ul className={"sections-list"}>
            {course.courseFeedbacks.map((courseFeedback: CourseFeedback) => (
              <li
                key={courseFeedback.id}
                className={"list" + (selectedMenu ? selectedMenu.id === courseFeedback.id ? " section-active" : "" : "")}
                onMouseUp={this.feedbackClickHandler}
                data-id={courseFeedback.id}>
                <div className={"title"}>{courseFeedback.name}</div>
              </li>))}
          </ul>
        </div> : <></>}
    </div>

  }
}

export default injectIntl(SectionListComponent);