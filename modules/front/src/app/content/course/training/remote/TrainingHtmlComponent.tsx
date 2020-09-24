import React from "react";
import {LearningObject} from "../../../../../cuba/entities/base/tsadv$LearningObject";

export interface TrainingHtmlComponentProps {
  content: LearningObject;
}

class TrainingHtmlComponent extends React.Component<TrainingHtmlComponentProps> {
  render() {
    const {content} = this.props;
    return <div className={"section-container-body"} dangerouslySetInnerHTML={{__html: content.html!}}/>
  }
}

export default TrainingHtmlComponent