import React, {SyntheticEvent} from "react";
import {LearningObject} from "../../../../../cuba/entities/base/tsadv$LearningObject";
import {observer} from "mobx-react";

interface TrainingVideoComponentProps {
  sectionId: string,
  content: LearningObject,
  enrollmentId: string
}

@observer
class TrainingTextComponent extends React.Component<TrainingVideoComponentProps> {
  render() {
    return <div className={"section-container-body"} dangerouslySetInnerHTML={{__html: this.props.content.text!}}>
    </div>;
  }
}

export default TrainingTextComponent