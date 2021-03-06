import React from "react";
import {getCubaREST} from "@cuba-platform/react";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import TestComponent, {Test} from "../../course/training/remote/test/TestComponent";
import {restServices} from "../../../../cuba/services";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import Content from "../../Content";
import {MatchParams, RouteComponentProps} from "../../../common/model/RouteComponentProps";
import { notification } from "antd";
import { injectIntl, WrappedComponentProps } from "react-intl";
import { ResponsePojo, ResponsePojoStatus } from "../../../common/ResponsePojo";
interface Props extends RouteComponentProps<MatchParams> {
}

@observer
class TestPageComponent extends React.Component<Props & WrappedComponentProps> {

  @observable test: Test | null = null;

  componentDidMount(): void {
    restServices.tsadv_LmsService.startAndLoadTestById(getCubaREST()!, {
      testId: this.props.match.params.id
    })().then((response: string) => {
      const test: Test = JSON.parse(response);
      if(test.attemptId){
        this.setTest(test);
      }
      else {
        const errorResponse : ResponsePojo = JSON.parse(response); 
        notification.error({ message: this.props.intl.formatMessage({id :errorResponse.message})});
        this.props.history.push("/training/tests");
      }
    })
  }

  finishTestHandler = () => {
    this.props.history.push("/");
  };

  @action setTest = (value: Test) => {
    this.test = value;
  };

  render() {
    const bodyComponent = (this.test != null ?
      <div className={"questions-container"}><TestComponent hideButtonStyle={{backgroundColor: '#fff'}} test={this.test!}
                                                            okFinishTestHandler={this.finishTestHandler}
                                                            finishTimeHandler={this.finishTestHandler}/>
      </div> : <LoadingComponent/>);

    const
      ContentComponent = Content(bodyComponent, {
        headerName: "????????",
      });
    return <ContentComponent/>;
  }
}

export default injectIntl(TestPageComponent);