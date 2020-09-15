import React from "react";
import LoadingComponent from "../../../../../common/loading/LoadingComponent";
import {restServices} from "../../../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import {Test} from "./TestComponent";
import TestComponent from "./TestComponent";
import {Spin} from "antd";

export interface TestDsComponentProps {
  courseSectionObjectId: string,
  enrollmentId: string,
}

export interface TestComponentHandlers {
  okFinishTestHandler?: () => void,
  finishTimeHandler?: () => void
}

@observer
class TestDsComponent extends React.Component<TestDsComponentProps & TestComponentHandlers> {

  @observable test: Test | null = null;

  componentDidMount(): void {
    restServices.tsadv_LmsService.startAndLoadTest(getCubaREST()!, {
      courseSectionObjectId: this.props.courseSectionObjectId,
      enrollmentId: this.props.enrollmentId
    })().then((response: string) => {
      const test: Test = JSON.parse(response);
      this.setTest(test);
    })
  }

  @action setTest = (value: Test) => {
    this.test = value;
  };

  render() {
    const {test} = this;

    return <Spin spinning={test === null}>{test != null ? <TestComponent test={this.test!} {...this.props}/> : <></>}</Spin>
  }
}

export default TestDsComponent;