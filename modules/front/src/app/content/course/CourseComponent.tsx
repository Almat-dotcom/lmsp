import React from "react";
import {History, Location} from 'history'
import Content from "../Content";
import {observer} from "mobx-react";
import {action, observable} from "mobx";
import {getCubaREST} from "@cuba-platform/react";
import {Course} from "../../../cuba/entities/tsadv/tsadv$Course";

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
    const CourseComponent = () => {
      return <div></div>
    };

    const ContentComponent = Content(CourseComponent);
    return <ContentComponent headerName={"Курс: " + (this.course ? this.course.name! : "")}/>;
  }
}

export default CourseComponent;