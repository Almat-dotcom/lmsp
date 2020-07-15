import React from "react";
import defaultImgSrc from "./course-min.png";
import './course.css'
import {Button} from "antd";
import {CourseType} from "../CourseComponent";
import {Course} from "../../../../cuba/entities/tsadv/tsadv$Course";

export enum BoxType {
  DEFAULT = "DEFAULT",
  NO_BOX = "NO-BOX",
}

export interface CourseComponentProps {
  id: string,
  name: string,
  logo: string | undefined,
  courseItemType: CourseType,
  boxType: BoxType
}

export interface CourseHandlers {
  onButtonClickHandler?: () => void,
  courseClickHandler?: (e: React.MouseEvent<HTMLDivElement>) => void
}

class CourseItemComponent extends React.Component<CourseComponentProps & CourseHandlers> {
  render() {
    const {id, name, logo} = this.props;
    const imgSrc = logo ? "data:image/png;base64," + logo : defaultImgSrc;
    const courseItemClassName = "course-item course-item-" + this.props.boxType.toLowerCase();

    return (
      <div className={courseItemClassName} onMouseUp={this.props.courseClickHandler} data-id={id}><img src={imgSrc}
                                                                                                       alt={name!}/>
        <div className={"course-item-title"}><span
          title={name!}>{name}</span></div>
        {this.props.courseItemType === CourseType.DEFAULT ? <div className={"registration-button-container"}>
          <Button ghost={false} type={'primary'} onClick={this.props.onButtonClickHandler}>Пройти</Button>
        </div> : <></>}
      </div>)
  }
}

export default CourseItemComponent;