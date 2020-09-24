import React from "react";
import {injectIntl, WrappedComponentProps} from "react-intl";
import './style.css'
import TrainingDescriptionComponent from "./description/TrainingDescriptionComponent";
import {CourseData} from "../CourseComponent";
import {CourseSection} from "../../../../cuba/entities/base/tsadv$CourseSection";
import {observer} from "mobx-react";
import {trainingBodyMap} from "./TrainingBodyMap";
import {CourseSectionFormat} from "../../../../cuba/enums/enums";

interface TrainingComponentProps {
  course: CourseData,
  courseSection: CourseSection | null,
}

export interface TrainingComponentHandlers {
  resetSectionItem?: () => void
}

class TrainingComponent extends React.Component<TrainingComponentProps & TrainingComponentHandlers & WrappedComponentProps> {
  render() {
    const {course, courseSection} = this.props;
    const TrainingBodyComponent: React.ReactElement = (course.enrollmentId != null && courseSection)
      ? getTrainingBody(courseSection, course.enrollmentId, {...this.props})
      : React.createElement(TrainingDescriptionComponent, {...this.props});

    return TrainingBodyComponent
  }
}

const getTrainingBody = (courseSection: CourseSection, enrollmentId: string | null, handlers: TrainingComponentHandlers): React.ClassType<any, any, any> => {
  const courseFormat: CourseSectionFormat = CourseSectionFormat[courseSection!.format!.code!.toUpperCase()] as CourseSectionFormat;
  return React.createElement(trainingBodyMap.get(courseFormat)!, {
    ...courseSection,
    enrollmentId: enrollmentId, ...handlers
  })
};

export default injectIntl(TrainingComponent);