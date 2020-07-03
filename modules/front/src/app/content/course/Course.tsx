import React from "react";
import {Location, History} from 'history'

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


class Course extends React.Component<Props> {


  componentDidMount(): void {
    console.log(this.props.match.params.id)
  }

  render() {
    return <div>Course</div>
  }
}

export default Course;