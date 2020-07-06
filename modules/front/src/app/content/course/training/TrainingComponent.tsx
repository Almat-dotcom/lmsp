import React from "react";
import {Course} from "../../../../cuba/entities/tsadv/tsadv$Course";
import {injectIntl, WrappedComponentProps} from "react-intl";
import './style.css'
import TrainingDescriptionComponent from "./TrainingDescriptionComponent";
import LoadingComponent from "../../../common/loading/LoadingComponent";

interface TrainingComponentProps {
  course: Course,
  isRegistered: boolean | undefined
}

class TrainingComponent extends React.Component<TrainingComponentProps & WrappedComponentProps> {
  render() {
    const {course, isRegistered} = this.props;
    return isRegistered === undefined ? <LoadingComponent/>
      : isRegistered ? <></>
        : <TrainingDescriptionComponent course={course}/>
  }
}

export default injectIntl(TrainingComponent);