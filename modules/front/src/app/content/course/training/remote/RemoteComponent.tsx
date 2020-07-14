import React from "react";
import {remoteMap} from "./RemoteMap";
import {ContentType} from "../../../../../cuba/enums/enums";
import {CourseSectionObject} from "../../../../../cuba/entities/tsadv/tsadv$CourseSectionObject";
import BlankComponent from "../../../../common/BlankComponent";
import {injectIntl, WrappedComponentProps} from "react-intl";

interface RemoteComponentProps {
  sectionObject: CourseSectionObject,
  enrollmentId: string
}

class RemoteComponent extends React.Component<RemoteComponentProps & WrappedComponentProps> {
  render() {
    if (!this.props.sectionObject.content) {
      return BlankComponent
    }

    const content = this.props.sectionObject.content!;
    const contentType: ContentType = ContentType[content.contentType!] as ContentType;
    const props = {...this.props.sectionObject};
    return <>
      <h2>{this.props.intl.formatMessage({id: "description"})}: {content.description}</h2>
      {React.createElement(remoteMap.get(contentType), {...props, sectionId: this.props.sectionObject.id})}
    </>
  }
}

export default injectIntl(RemoteComponent)