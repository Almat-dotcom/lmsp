import React from "react";
import {LearningObject} from "../../../../../cuba/entities/tsadv/tsadv$LearningObject";
import {CourseSection} from "../../../../../cuba/entities/tsadv/tsadv$CourseSection";
import TrainingHtmlComponent from "./TrainingHtmlComponent";
import {CourseSectionObject} from "../../../../../cuba/entities/tsadv/tsadv$CourseSectionObject";
import {action, observable} from "mobx";

interface TrainingHtmlComponentProps {
  sectionObject: CourseSectionObject
}

class TrainingHtmlWrapperComponent extends React.Component<TrainingHtmlComponentProps> {

  render() {
    const {sectionObject} = this.props;

    return <TrainingHtmlComponent content={sectionObject.content!} />
  }
}

export default TrainingHtmlWrapperComponent