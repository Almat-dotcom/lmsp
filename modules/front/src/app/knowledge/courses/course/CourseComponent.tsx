import React from "react";
import {Course} from "../../../../cuba/entities/tsadv/tsadv$Course";
import defaultImgSrc from "./course-min.png";
import './course.css'
import {Button} from "antd";

export interface CourseComponentProps {
  course: Course
}

class CourseComponent extends React.Component<CourseComponentProps> {
  render() {
    const {course} = this.props;

    const imgSrc = course.logo ? "data:image/png;base64," + course.logo : defaultImgSrc;
    return (
      <div className={"course-item"}><img src={imgSrc} alt={course.name!}/>
        <div className={"course-item-title"}><span
          title={course.name!}>{course.name}</span></div>
        <div className={"registration-button-container"}>
          <Button ghost={false} type={'primary'}>Пройти</Button>
        </div>
      </div>)
  }
}

export default CourseComponent;