import React from "react";
import {injectIntl, WrappedComponentProps} from "react-intl";
import './style.css'
import TrainingDescriptionComponent from "./TrainingDescriptionComponent";
import {CourseData} from "../CourseComponent";
import {CourseSection} from "../../../../cuba/entities/tsadv/tsadv$CourseSection";
import {observer} from "mobx-react";
import {trainingBodyMap} from "./TrainingBodyMap";
import {CourseSectionFormat} from "../../../../cuba/enums/enums";

interface TrainingComponentProps {
  course: CourseData,
  courseSection: CourseSection | null
}

@observer
class TrainingComponent extends React.Component<TrainingComponentProps & WrappedComponentProps> {

  render() {
    const {course, courseSection} = this.props;
    const TrainingBodyComponent: React.ReactElement = (course.enrollmentId != null && courseSection)
      ? getTrainingBody(courseSection, course.enrollmentId)
      : React.createElement(TrainingDescriptionComponent, {course});

    return TrainingBodyComponent
  }
}

const getTrainingBody = (courseSection: CourseSection, enrollmentId: string | null): React.ClassType<any, any, any> => {
  const courseFormat: CourseSectionFormat = CourseSectionFormat[courseSection!.format.code!.toUpperCase()] as CourseSectionFormat;
  return React.createElement(trainingBodyMap.get(courseFormat)!, {...courseSection, enrollmentId: enrollmentId})
};

export default injectIntl(TrainingComponent);