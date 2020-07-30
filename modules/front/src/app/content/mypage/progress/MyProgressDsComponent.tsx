import LoadingComponent from "../../../common/loading/LoadingComponent";
import Content from "../../Content";
import React from "react";
import {injectIntl, WrappedComponentProps} from "react-intl";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import MyProgressComponent from "./MyProgressComponent";
import {restServices} from "../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";

export interface ProgressLine {
  lineNum: number,
  date: string,
  courseName: string,
  fio: string,
  score: number,
  maxScore: number,
  countFailed: number,
  certificateUrl: string
}

@observer
class MyProgressDsComponent extends React.Component<WrappedComponentProps> {

  @observable myProgress: ProgressLine[] | null = null;

  componentDidMount(): void {
    restServices.tsadv_LmsService.loadPersonProgress(getCubaREST()!)().then((response: string) => {
      this.setMyProgress(JSON.parse(response))
    });
  }

  @action
  setMyProgress = (value: ProgressLine[] | null) => {
    this.myProgress = value;
  };

  render() {
    const MyProgressContentComponent = (myProgress: ProgressLine[] | null) => () => {
      return <div>
        {myProgress ? <MyProgressComponent progress={this.myProgress!}/> :
          <LoadingComponent/>}
      </div>
    };

    const ContentComponent = Content(MyProgressContentComponent(this.myProgress));
    return <ContentComponent headerName={this.props.intl.formatMessage({id: "myProgress"})} wrapperCss={{padding: 0}}
                             contentWrapperCss={{padding: '50px'}}/>;
  }
}

export default injectIntl(MyProgressDsComponent)