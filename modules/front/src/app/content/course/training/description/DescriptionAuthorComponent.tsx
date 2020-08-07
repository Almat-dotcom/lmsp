import React from "react";
import {Course} from "../../../../../cuba/entities/tsadv/tsadv$Course";
import {injectIntl, WrappedComponentProps} from "react-intl";

interface DescriptionBodyComponentProps {
  course: Course
}

class DescriptionAuthorComponent extends React.Component<DescriptionBodyComponentProps & WrappedComponentProps> {
  render() {
    return <div className={"section-training-author"}>
      <p>{this.props.intl.formatMessage({id: "course.author"}) + ": "}</p>
    </div>
  }
}

export default injectIntl(DescriptionAuthorComponent);