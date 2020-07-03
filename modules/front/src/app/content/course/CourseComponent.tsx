import React from "react";
import {History, Location} from 'history'
import Content from "../Content";
import {observer} from "mobx-react";
import {action, observable} from "mobx";
import {getCubaREST} from "@cuba-platform/react";
import {Course} from "../../../cuba/entities/tsadv/tsadv$Course";
import './style.css'
import defaultImgSrc from "../../common/CourseComponent/CourseItemComponent/course-min.png";
import {MatchParams, RouteComponentProps} from "../../common/model/RouteComponentProps";


interface Props extends RouteComponentProps<MatchParams> {
}

@observer
class CourseComponent extends React.Component<Props> {

  @observable course: Course | undefined = undefined;

  @observable selectedSectionElement: HTMLLIElement | null = null;

  componentDidMount(): void {
    getCubaREST()!.loadEntity(Course.NAME, this.props.match.params.id, {view: 'course.tree'}).then(response => {
      console.log(response);
      this.setCourse(response as Course);
    })
  }

  sectionClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    this.setSelectedSectionElement(e.currentTarget);
  };

  @action setSelectedSectionElement(value: HTMLLIElement) {
    if (value === this.selectedSectionElement) {
      this.selectedSectionElement.className = this.selectedSectionElement.className.split(' ').filter(el => el !== 'section-active').join(' ');
      this.selectedSectionElement = null;
    } else {
      if (this.selectedSectionElement != null) {
        this.selectedSectionElement.className = this.selectedSectionElement.className.split(' ').filter(el => el !== 'section-active').join(' ');
      }
      this.selectedSectionElement = value;
      this.selectedSectionElement.className = this.selectedSectionElement.className + ' section-active';
    }
  }

  @action setCourse = (course: Course) => {
    this.course = course;
  };

  render() {
    let imgSrc: string;
    if (this.course && this.course.logo) {
      imgSrc = "data:image/png;base64," + this.course.logo;
    } else {
      imgSrc = defaultImgSrc;
    }

    const CourseComponent = () => {
      return <div className={"course-container"}>
        <div className={"sections-container"}>
          <img src={imgSrc}/>
          <ul className={"sections-list"}>
            {this.course ? this.course.sections.map((section: any) => (<li onMouseUp={this.sectionClickHandler}>
              <div className={"title"}>{section.sectionName}</div>
              <div className={"format"}>{section.format.langValue1}</div>
            </li>)) : <></>}
          </ul>
        </div>
        <div className={"section-training-container"}>
          <div></div>
        </div>
      </div>
    };

    const ContentComponent = Content(CourseComponent);
    return <ContentComponent headerName={"Курс: " + (this.course ? this.course.name! : "")} wrapperCss={{padding: 0}}
                             contentWrapperCss={{padding: '50px'}}/>;
  }
}

export default CourseComponent;