import React from "react";
import {LearningObject} from "../../../../../cuba/entities/base/tsadv$LearningObject";

interface TrainingUrlComponentProps {
  sectionId: string,
  content: LearningObject;
}

class TrainingUrlComponent extends React.Component<TrainingUrlComponentProps> {
  render() {
    const url = this.props.content.url!.replace(window.location.origin, "");
    return <iframe src={url} className={"section-container-body"}/>
  }
}

export default TrainingUrlComponent