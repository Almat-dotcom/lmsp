import React from "react";
import {injectIntl, WrappedComponentProps} from "react-intl";
import './style.css'
import TrainingDescriptionComponent from "./TrainingDescriptionComponent";
import {CourseData} from "../CourseComponent";
import {CourseSection} from "../../../../cuba/entities/tsadv/tsadv$CourseSection";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import {trainingBodyPropsMap} from "./TrainingBodyPropsMap";
import {trainingBodyMap} from "./TrainingBodyMap";
import {ContentType, CourseSectionFormat} from "../../../../cuba/enums/enums";

interface TrainingComponentProps {
  course: CourseData,
  courseSection: CourseSection | null
}

//TODO: Переписать весь класс
@observer
class TrainingComponent extends React.Component<TrainingComponentProps & WrappedComponentProps> {

  render() {
    const {course, courseSection} = this.props;
    // let TrainingBodyComponent: React.ReactElement | null = null;
    // if (courseSection) {
    //   if (courseSection.sectionObject && courseSection.sectionObject.content && (courseSection.sectionObject.content.contentType!.toLowerCase() === 'html' || courseSection.sectionObject.content.contentType!.toLowerCase() === 'url')) {
    //     if (courseSection.sectionObject.content.contentType!.toLowerCase() === 'html') {
    //       TrainingBodyComponent = React.createElement("div", {
    //         dangerouslySetInnerHTML: {__html: courseSection.sectionObject.content.html!},
    //         className: 'section-container-body'
    //       })
    //     } else {
    //       TrainingBodyComponent = React.createElement("iframe", {
    //         src: courseSection.sectionObject.content.url!,
    //         className: 'section-container-body'
    //       })
    //     }
    //   } else if (courseSection.session && courseSection.session.length > 0) {
    //     const session = courseSection.session[0];
    //     TrainingBodyComponent = React.createElement("div", {
    //         className: 'section-container-body'
    //       }, React.createElement("div", {
    //         className: 'title-container',
    //       }, React.createElement("span", {}, this.props.intl.formatMessage({id: 'address'}) + ': ' + ''),
    //       React.createElement("span", {}, this.props.intl.formatMessage({id: 'startDate'}) + ': ' + session.startDate),
    //       React.createElement("span", {}, this.props.intl.formatMessage({id: 'endDate'}) + ': ' + session.endDate)),
    //       React.createElement("div", {
    //         id: 'google-map-container',
    //       }));
    //
    //
    //     this.setCoordinates(learningCenter.latitude, learningCenter.longitude);
    //     const learningCenter = courseSection.session[0].learningCenter;
    //   }
    // }

    const TrainingBodyComponent: React.ReactElement = course.hasEnrollment && courseSection
      ? getTrainingBody(courseSection)
      : React.createElement(TrainingDescriptionComponent, {course});

    return TrainingBodyComponent
  }
}

const getTrainingBody = (courseSection: CourseSection): React.ClassType<any, any, any> => {
  const courseFormat: CourseSectionFormat = CourseSectionFormat[courseSection!.format.code!.toUpperCase()] as CourseSectionFormat;
  return React.createElement(trainingBodyMap.get(courseFormat)!, {...courseSection})
};

export default injectIntl(TrainingComponent);