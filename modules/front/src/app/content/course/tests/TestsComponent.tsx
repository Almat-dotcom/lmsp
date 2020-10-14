import React from "react";
import Content from "../../Content";
import {observer} from "mobx-react";
import {restServices} from "../../../../cuba/services";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import {BoxType} from "../../../common/materialContainer/material/MaterialComponent";
import {MatchParams, RouteComponentProps} from "../../../common/model/RouteComponentProps";
import MaterialContainerComponent, {MaterialModel} from "../../../common/materialContainer/MaterialContainerComponent";
import {injectIntl, WrappedComponentProps} from "react-intl";
import {Modal} from "antd";
import PaginationLoadParent, {PromiseFunc} from "../../../common/PaginationLoadParent";

export interface Props extends RouteComponentProps<MatchParams> {
}

@observer
class TestsComponent extends PaginationLoadParent<MaterialModel, Props & WrappedComponentProps> {

  getLoadParams = (): PromiseFunc => {
    return {
      loadFunc: restServices.tsadv_LmsService.loadPersonTests
    }
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
    const TestsBody = <div>{this.loadedData ?
      <MaterialContainerComponent boxType={BoxType.DEFAULT}
                                  hasLoadMore={this.currentPage < this.pageCount}
                                  materialData={this.loadedData} materialClickHandler={this.materialClickHandler}/> :
      <LoadingComponent/>}</div>;

    const ContentComponent = Content(TestsBody, {
      headerName: this.props.intl.formatMessage({id: "menu.myTraining.tests"}),
    });
    return <ContentComponent/>
  }
}

export default injectIntl(TestsComponent);