import React from "react";
import {Course} from "../../../cuba/entities/tsadv/tsadv$Course";
import './courses.css'
import CourseItemComponent, {BoxType} from "./CourseItemComponent/CourseItemComponent";
import {SerializedEntity} from "@cuba-platform/rest";

export enum CourseType {
  DEFAULT = "DEFAULT",
  NO_BUTTON = "NO-BUTTON"
}

export type ComponentItemModel = {
  id: string,
  name: string,
  logo: string | undefined
}

type CourseDataType = Course | SerializedEntity<Course> | ComponentItemModel

export interface CourseProps {
  courses: Array<CourseDataType>,
  courseType: CourseType
  boxType: BoxType
}

export interface CourseHandlers {
  onButtonClickHandler?: () => void
  courseClickHandler?: (e: React.MouseEvent<HTMLDivElement>) => void
}

class CourseComponent extends React.Component<CourseProps & CourseHandlers> {
  render() {
    const {courses} = this.props;
    const containerClassName = "course-container-" + this.props.courseType.toLowerCase();
    return (
      <div className={"courses-wrapper"}>
        <div className={containerClassName}>
          <div className={"course-items"}>
            {courses.map((course: CourseDataType) => (
              <CourseItemComponent id={course.id!} name={course.name!} logo={course.logo}
                                   courseItemType={this.props.courseType}
                                   onButtonClickHandler={this.props.onButtonClickHandler}
                                   boxType={this.props.boxType}
                                   courseClickHandler={this.props.courseClickHandler}/>))}
          </div>
        </div>
      </div>);
  }
}

export default CourseComponent;