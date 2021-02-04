import React from "react";
import {injectIntl, WrappedComponentProps} from "react-intl";
import {CourseTrainer} from "./DescriptionAuthorDsComponent";
import styles from './style.module.css'

interface DescriptionBodyComponentProps {
  courseTrainers: CourseTrainer[]
}

class DescriptionAuthorComponent extends React.Component<DescriptionBodyComponentProps & WrappedComponentProps> {
  render() {
    return <div className={styles["section-training-author-container"]}>
      {this.props.courseTrainers.map(courseTrainer => {
        return <div className={styles["section-training-author"]}>
          <div className={styles["row"]}><span className={styles["title"]}>{this.props.intl.formatMessage({id: "fullName"})}:</span>
            <span>{courseTrainer.fullName}</span></div>
          <div className={styles["row"]}><span className={styles["title"]}>{this.props.intl.formatMessage({id: "professionalData"})}:</span>
            <span dangerouslySetInnerHTML={{__html: courseTrainer.professionalData}}></span></div>
          <div className={styles["row"]}><span className={styles["title"]}>{this.props.intl.formatMessage({id: "additionalData"})}:</span>
            <span dangerouslySetInnerHTML={{__html: courseTrainer.additionalData}}></span></div>
        </div>
      })}
    </div>
  }
}

export default injectIntl(DescriptionAuthorComponent);