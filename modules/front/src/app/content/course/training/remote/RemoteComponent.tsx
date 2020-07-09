import React from "react";
import {remoteMap} from "./RemoteMap";
import {ContentType} from "../../../../../cuba/enums/enums";
import {CourseSectionObject} from "../../../../../cuba/entities/tsadv/tsadv$CourseSectionObject";
import BlankComponent from "../../../../common/BlankComponent";

interface RemoteComponentProps {
  sectionObject: CourseSectionObject
}

class RemoteComponent extends React.Component<RemoteComponentProps> {
  render() {
    if (!this.props.sectionObject.content) {
      return BlankComponent
    }
    const contentType: ContentType = ContentType[this.props.sectionObject.content!.contentType!] as ContentType;
    const props = {...this.props.sectionObject};
    return React.createElement(remoteMap.get(contentType), props)
  }
}

export default RemoteComponent