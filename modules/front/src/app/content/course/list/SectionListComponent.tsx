import React from "react";
import defaultImgSrc from "../../../common/CourseComponent/CourseItemComponent/course-min.png";
import {injectIntl, WrappedComponentProps} from "react-intl";
import {Course} from "../../../../cuba/entities/tsadv/tsadv$Course";
import './style.css'
import {action, observable} from "mobx";
import LoadingComponent from "../../../common/loading/LoadingComponent";

interface SectionListComponentProps {
  course: Course,
  isRegistered: boolean | undefined
}

class SectionListComponent extends React.Component<SectionListComponentProps & WrappedComponentProps> {

  @observable selectedSectionElement: HTMLLIElement | undefined = undefined;

  sectionClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    this.setSelectedSectionElement(e.currentTarget);
  };

  @action setSelectedSectionElement(value: HTMLLIElement) {
    if (value === this.selectedSectionElement) {
      this.selectedSectionElement.className = this.selectedSectionElement.className.split(' ').filter(el => el !== 'section-active').join(' ');
      this.selectedSectionElement = undefined;
    } else {
      if (this.selectedSectionElement != null) {
        this.selectedSectionElement.className = this.selectedSectionElement.className.split(' ').filter(el => el !== 'section-active').join(' ');
      }
      this.selectedSectionElement = value;
      this.selectedSectionElement.className = this.selectedSectionElement.className + ' section-active';
    }
  }

  render() {
    const {course, isRegistered} = this.props;

    let imgSrc: string;
    if (course.logo) {
      imgSrc = "data:image/png;base64," + course.logo;
    } else {
      imgSrc = defaultImgSrc;
    }
    return <div className={"sections-container"}>
      <img src={imgSrc}/>
      <ul className={"sections-list"}>
        {isRegistered === undefined ? <LoadingComponent/>
          : isRegistered ?
            course ?
              course.sections.map((section: any) => (
                <li className={"list"} onMouseUp={this.sectionClickHandler}>
                  <div className={"title"}>{section.sectionName}</div>
                  <div className={"format"}>{section.format.langValue1}</div>
                </li>)) : <LoadingComponent/> :
            <li className={"button-list"}>
              <button>{this.props.intl.formatMessage({id: "follow"})}</button>
            </li>}
      </ul>
    </div>

  }
}

export default injectIntl(SectionListComponent);