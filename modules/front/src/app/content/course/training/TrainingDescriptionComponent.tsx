import React from "react";
import {Course} from "../../../../cuba/entities/tsadv/tsadv$Course";
import {injectIntl, WrappedComponentProps} from "react-intl";
import './style.css'
import {CourseSectionItem} from "../CourseComponent";

interface TrainingComponentProps {
  course: Course
}

class TrainingDescriptionComponent extends React.Component<TrainingComponentProps & WrappedComponentProps> {
  render() {
    const {course} = this.props;
    return <div className={"section-training-container"}>
      <div>
        <div className={"section-training-description"}>
          <h2 className={"section-training-title"}>{this.props.intl.formatMessage({id: "description"})}</h2>
          <p>{course && course ?
            <div dangerouslySetInnerHTML={{__html: course.description!}}/> : <></>}</p>
        </div>
        <hr/>
        <div className={"section-training-sections"}>
          <h2 className={"section-training-title"}>{this.props.intl.formatMessage({id: "sections"})}</h2>
          <ul className={"section-training-list"}>
            {course ? course.sections.map((section: CourseSectionItem) => (
              <li className={"list"}>
                <div className={"title"}>{section.sectionName}</div>
                <div
                  className={"format"}>{this.props.intl.formatMessage({id: "type"}) + ": "}{section.langValue1}</div>
              </li>)) : <></>}
          </ul>
        </div>
        <hr/>
        <div className={"section-training-author"}>
          <p>{this.props.intl.formatMessage({id: "course.author"}) + ": "}</p>
        </div>
      </div>
    </div>
  }
}

export default injectIntl(TrainingDescriptionComponent);