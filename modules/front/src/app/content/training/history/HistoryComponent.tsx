import React from "react";
import Content from "../../Content";
import {observer} from "mobx-react";
import {Course} from "../../../../cuba/entities/tsadv/tsadv$Course";
import {restServices} from "../../../../cuba/services";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import {BoxType} from "../../../common/materialContainer/material/MaterialComponent";
import {MatchParams, RouteComponentProps} from "../../../common/model/RouteComponentProps";
import MaterialContainerComponent from "../../../common/materialContainer/MaterialContainerComponent";
import PaginationLoadParent, {PromiseFunc} from "../../../common/PaginationLoadParent";

export interface Props extends RouteComponentProps<MatchParams> {
}

@observer
class HistoryComponent extends PaginationLoadParent<Course, Props> {

  getLoadParams = (): PromiseFunc => {
    return {
      loadFunc: restServices.tsadv_LmsService.getPersonHistory
    }
  };

  materialClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.props.history.push("/course/" + e.currentTarget.dataset.id);
  };

  render() {
    const HistoryBody = <div>{this.loadedData ?
      <MaterialContainerComponent boxType={BoxType.DEFAULT}
                                  materialData={this.loadedData}
                                  hasLoadMore={this.currentPage < this.pageCount}
                                  loadMoreClickHandler={this.incrementPage}
                                  materialClickHandler={this.materialClickHandler}/> :
      <LoadingComponent/>}</div>;

    const ContentComponent = Content(HistoryBody, {
      headerName: "История",
    });
    return <ContentComponent/>
  }
}

export default HistoryComponent;