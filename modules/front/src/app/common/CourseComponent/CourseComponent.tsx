import React from "react";
import {Course} from "../../../cuba/entities/tsadv/tsadv$Course";
import './courses.css'
import CourseItemComponent from "./CourseItemComponent/CourseItemComponent";
import {SerializedEntity} from "@cuba-platform/rest";

export enum CourseType {
  DEFAULT = "DEFAULT",
  NO_BUTTON = "NO-BUTTON"
}

type CourseDataType = Course | SerializedEntity<Course>

export interface CourseProps {
  courses: Array<CourseDataType>,
  courseType: CourseType
}

class CourseComponent extends React.Component<CourseProps> {
  render() {
    const {courses} = this.props;
    const containerClassName = "course-container-" + this.props.courseType.toLowerCase();
    return (
      <div className={"courses-wrapper"}>
        <div className={containerClassName}>
          <div className={"course-items"}>
            {courses.map((course: CourseDataType) => (
              <CourseItemComponent course={course} courseItemType={this.props.courseType}/>))}
          </div>
        </div>
      </div>);
  }
}

export default CourseComponent;