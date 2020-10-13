import React from "react";
import LoadingComponent from "../../../../../common/loading/LoadingComponent";
import {restServices} from "../../../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import {Test} from "./TestComponent";
import {injectIntl, WrappedComponentProps} from "react-intl"
import TestComponent from "./TestComponent";
import { History } from "history";
import {notification, Spin} from "antd";
import {ResponsePojo, ResponsePojoStatus} from "../../../../../common/ResponsePojo";
import { RouteComponentProps, MatchParams } from "../../../../../common/model/RouteComponentProps";
export interface TestDsComponentProps {
  courseSectionObjectId: string,
  enrollmentId: string,
}

export interface TestComponentHandlers {
  okFinishTestHandler?: () => void,
  finishTimeHandler?: () => void
}
interface HistoryProps {
  history : History
}
@observer
class TestDsComponent extends React.Component<TestDsComponentProps & TestComponentHandlers & HistoryProps & WrappedComponentProps> {

  @observable test: Test | null = null;

  componentDidMount(): void {
    restServices.tsadv_LmsService.startAndLoadTest(getCubaREST()!, {
      courseSectionObjectId: this.props.courseSectionObjectId,
      enrollmentId: this.props.enrollmentId
    })().then((response: string) => {
      const errorResponse : ResponsePojo = JSON.parse(response);
      if(errorResponse.status != ResponsePojoStatus.ERROR){
        const test: Test = JSON.parse(response);
        this.setTest(test);
      }
      else {
        const errorResponse : ResponsePojo = JSON.parse(response); 
        notification.error({ message: this.props.intl.formatMessage({id :errorResponse.message})});
        this.props.history.goBack();
      }    
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

export default injectIntl(TestDsComponent);