import React from "react";
import {History, Location} from 'history'
import Content from "../Content";
import {observer} from "mobx-react";
import {action, observable} from "mobx";
import {getCubaREST} from "@cuba-platform/react";
import {Course} from "../../../cuba/entities/tsadv/tsadv$Course";
import './style.css'
import defaultImgSrc from "../../common/CourseComponent/CourseItemComponent/course-min.png";

interface MatchParams {
  id: string
}

interface Props extends RouteComponentProps<MatchParams> {
}

export interface RouteComponentProps<P> {
  match: match<P>;
  location: Location;
  history: History;
  staticContext?: any;
}

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

@observer
class CourseComponent extends React.Component<Props> {

  @observable course: Course;

  componentDidMount(): void {
    getCubaREST()!.loadEntity(Course.NAME, this.props.match.params.id, {view: '_local'}).then(response => {
      this.setCourse(response as Course);
    })
  }

  @action setCourse = (course: Course) => {
    this.course = course;
  };

  render() {
    const {id} = this.props.match.params;
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
            <li>1</li>
            <li>2</li>
            <li>3</li>
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