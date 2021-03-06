import React from "react";
import {remoteMap} from "./RemoteMap";
import {ContentType} from "../../../../../cuba/enums/enums";
import {CourseSectionObject} from "../../../../../cuba/entities/base/tsadv$CourseSectionObject";
import {injectIntl, WrappedComponentProps} from "react-intl";
import TestDsComponent from "./test/TestDsComponent";
import {TrainingComponentHandlers} from "../TrainingComponent";
import { RouteComponentProps } from "react-router-dom";
import { MatchParams } from "../../../../common/model/RouteComponentProps";
import { History } from "history"

interface RemoteComponentProps {
  sectionObject: CourseSectionObject,
  enrollmentId: string
}
interface HistoryProps {
  history : History
}
class RemoteComponent extends React.Component<RemoteComponentProps & TrainingComponentHandlers & WrappedComponentProps & HistoryProps> {
  render() {
    if (!this.props.sectionObject.content && this.props.sectionObject.test) {
      if (this.props.sectionObject.id) {
        return <TestDsComponent courseSectionObjectId={this.props.sectionObject.id} history={this.props.history}
                                enrollmentId={this.props.enrollmentId} okFinishTestHandler={this.props.resetSectionItem} finishTimeHandler={this.props.resetSectionItem}/>;
      }
    }

    const content = this.props.sectionObject.content!;
    const contentType: ContentType | undefined = ContentType[content.contentType!] as ContentType;
    const props = {...this.props.sectionObject};
    return <>
      <h2>{this.props.intl.formatMessage({id: "description"}) + ': '}
        <span dangerouslySetInnerHTML={{__html: content.description!}}/></h2>
      {React.createElement(remoteMap.get(contentType), {...props, sectionId: this.props.sectionObject.id})}
    </>
  }
}

export default injectIntl(RemoteComponent)