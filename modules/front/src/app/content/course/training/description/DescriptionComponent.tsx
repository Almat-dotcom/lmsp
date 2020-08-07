import React from "react";
import {Course} from "../../../../../cuba/entities/tsadv/tsadv$Course";
import {injectIntl, WrappedComponentProps} from "react-intl";

interface DescriptionBodyComponentProps {
  course: Course
}

class DescriptionComponent extends React.Component<DescriptionBodyComponentProps & WrappedComponentProps> {
  render() {
    console.log(this.props.course.description);
    return <div dangerouslySetInnerHTML={{__html: this.props.course.description!}}/>
  }
}

export default injectIntl(DescriptionComponent);