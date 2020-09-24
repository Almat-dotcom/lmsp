import React from "react";
import {Course} from "../../../../../../cuba/entities/base/tsadv$Course";
import {injectIntl, WrappedComponentProps} from "react-intl";
import {observer} from "mobx-react";
import {action, observable} from "mobx";
import {Spin} from "antd";
import DescriptionAuthorComponent from "./DescriptionAuthorComponent";
import {restServices} from "../../../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";

interface DescriptionBodyComponentProps {
  course: Course
}

export interface CourseTrainer {
  fullName: string,
  professionalData: string,
  additionalData: string,
}

@observer
class DescriptionAuthorDsComponent extends React.Component<DescriptionBodyComponentProps & WrappedComponentProps> {

  @observable courseTrainers: CourseTrainer[] | null = null;

  @action setCourseTrainers = (value: CourseTrainer[] | null) => {
    this.courseTrainers = value;
  };

  componentDidMount(): void {
    restServices.tsadv_LmsService.getCourseTrainers(getCubaREST()!, {courseId: this.props.course.id!.toString()})()
      .then((response: string) => {
        this.setCourseTrainers(JSON.parse(response));
      })
  }

  render() {
    return <Spin tip={this.props.intl.formatMessage({id: "Please wait, loading course trainers"})}
                 spinning={this.courseTrainers === null}>
      {this.courseTrainers !== null ? <DescriptionAuthorComponent courseTrainers={this.courseTrainers}/> : <></>}
    </Spin>
  }
}

export default injectIntl(DescriptionAuthorDsComponent);