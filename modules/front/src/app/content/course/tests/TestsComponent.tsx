import React from "react";
import Content from "../../Content";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import {Course} from "../../../../cuba/entities/tsadv/tsadv$Course";
import {restServices} from "../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import {BoxType} from "../../../common/materialContainer/material/MaterialComponent";
import {MatchParams, RouteComponentProps} from "../../../common/model/RouteComponentProps";
import MaterialContainerComponent, {
  MaterialModel,
  MaterialType
} from "../../../common/materialContainer/MaterialContainerComponent";
import {injectIntl, WrappedComponentProps} from "react-intl";
import {Modal} from "antd";

export interface Props extends RouteComponentProps<MatchParams> {
}

@observer
class TestsComponent extends React.Component<Props & WrappedComponentProps> {

  @observable private tests: MaterialModel[] | null = null;

  componentDidMount(): void {
    restServices.tsadv_LmsService.loadPersonTests(getCubaREST()!)().then((response: string) => {
      const courses: MaterialModel[] = JSON.parse(response);
      this.setTests(courses);
    })
  }

  @action setTests = (value: MaterialModel[]) => {
    this.tests = value;
  };

  materialClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const testId: string = e.currentTarget.dataset.id!;
    Modal.confirm({
      title: this.props.intl.formatMessage({id: "tests.modal.title"}),
      okText: this.props.intl.formatMessage({id: "knowledge.courses.modal.ok"}),
      cancelText: this.props.intl.formatMessage({id: "knowledge.courses.modal.cancel"}),
      onOk: () => {
        this.props.history.push("/test/" + testId);
      }
    });
  };

  render() {
    const TestsBody = (tests: MaterialModel[] | null) => () => {
      return <div>{tests ?
        <MaterialContainerComponent materialType={MaterialType.NO_BUTTON} boxType={BoxType.DEFAULT}
                                    materialData={tests} materialClickHandler={this.materialClickHandler}/> :
        <LoadingComponent/>}</div>
    };

    const ContentComponent = Content(TestsBody(this.tests));
    return <ContentComponent headerName={this.props.intl.formatMessage({id: 'menu.myTraining.tests'})}/>
  }
}

export default injectIntl(TestsComponent);