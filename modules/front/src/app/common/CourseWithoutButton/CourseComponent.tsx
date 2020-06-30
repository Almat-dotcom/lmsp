import React from "react";
import defaultImgSrc from "./course-min.png";
import './course.css'
import {Course} from "../../../cuba/entities/tsadv/tsadv$Course";

export interface CourseComponentProps {
  course: Course
}

class CourseComponent extends React.Component<CourseComponentProps> {
  render() {
    const {course} = this.props;

    const imgSrc = course.logo ? "data:image/png;base64," + course.logo : defaultImgSrc;
    return (
      <div className={"course-no-button-item"}><img src={imgSrc} alt={course.name!}/>
        <div className={"course-item-title"}>
          <div title={course.name!}>{course.name}</div>
        </div>
      </div>)
  }
}

export default CourseComponent;