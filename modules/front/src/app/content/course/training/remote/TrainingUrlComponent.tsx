import React from "react";
import {LearningObject} from "../../../../../cuba/entities/tsadv/tsadv$LearningObject";

interface TrainingUrlComponentProps {
  content: LearningObject;
}

class TrainingUrlComponent extends React.Component<TrainingUrlComponentProps> {
  render() {
    return <iframe src={this.props.content.url!} className={"section-container-body"}/>
  }
}

export default TrainingUrlComponent