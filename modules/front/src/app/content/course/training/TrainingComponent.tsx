import React from "react";
import {injectIntl, WrappedComponentProps} from "react-intl";
import './style.css'
import TrainingDescriptionComponent from "./TrainingDescriptionComponent";
import {CourseData} from "../CourseComponent";
import {CourseSection} from "../../../../cuba/entities/tsadv/tsadv$CourseSection";

interface TrainingComponentProps {
  course: CourseData,
  courseSection: CourseSection | null
}

class TrainingComponent extends React.Component<TrainingComponentProps & WrappedComponentProps> {
  render() {
    const {course, courseSection} = this.props;
    if (courseSection) {
      console.log(courseSection.description);
    }

    let TrainingBodyComponent = <></>;
    if (courseSection) {
      if (courseSection.session && courseSection.session.length > 0) {
        const session = courseSection.session[0];
        const learningCenter = courseSection.session[0].learningCenter;
        // learningCenter.latitude
        // learningCenter.longitude
      } else if (courseSection.sectionObject && courseSection.sectionObject.content && courseSection.sectionObject.content.contentType.toLowerCase() === 'html') {
        TrainingBodyComponent = React.createElement("div", {
          dangerouslySetInnerHTML: {__html: courseSection.sectionObject.content.html!},
          className: 'section-container-body'
        });
      }
    }
    return course.hasEnrollment && courseSection ?
      TrainingBodyComponent :
      <TrainingDescriptionComponent course={course}/>
  }
}

export default injectIntl(TrainingComponent);