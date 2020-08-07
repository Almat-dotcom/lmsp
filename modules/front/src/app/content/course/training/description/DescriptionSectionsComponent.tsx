import React from "react";
import {Course} from "../../../../../cuba/entities/tsadv/tsadv$Course";
import {injectIntl, WrappedComponentProps} from "react-intl";
import {CourseSectionItem} from "../../CourseComponent";
import styles from './styles.module.css'

interface DescriptionBodyComponentProps {
  course: Course
}

class DescriptionSectionsComponent extends React.Component<DescriptionBodyComponentProps & WrappedComponentProps> {
  render() {
    return <ul className={styles["section-training-list"]}>
      {this.props.course.sections.map((section: CourseSectionItem) => (
        <li className={styles["list"]}>
          <div className={styles["title"]}>{section.sectionName}</div>
          <div
            className={styles["format"]}>{this.props.intl.formatMessage({id: "type"}) + ": "}{section.langValue1}</div>
        </li>))}
    </ul>
  }
}

export default injectIntl(DescriptionSectionsComponent);