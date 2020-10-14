import React from 'react'
import Content from "../../Content";
import {restServices} from "../../../../cuba/services";
import {Course} from "../../../../cuba/entities/base/tsadv$Course";
import {observer} from "mobx-react";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import {BoxType} from "../../../common/materialContainer/material/MaterialComponent";
import {MatchParams, RouteComponentProps} from "../../../common/model/RouteComponentProps";
import MaterialContainerComponent from "../../../common/materialContainer/MaterialContainerComponent";
import PaginationLoadParent, {PromiseFunc} from "../../../common/PaginationLoadParent";

export interface Props extends RouteComponentProps<MatchParams> {
}

@observer
class CurrentCourses extends PaginationLoadParent<Course, Props> {

  getLoadParams = (): PromiseFunc => {
    return {
      loadFunc: restServices.tsadv_LmsService.getPersonCourses
    }
  };

  materialClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.props.history.push("/course/" + e.currentTarget.dataset.id);
  };

  render() {
    const BodyComponent = (
      <div className={"course-items-container"}>
        <div className={"course-items"}>
          {this.loadedData != undefined ?
            <MaterialContainerComponent materialData={this.loadedData}
                                        boxType={BoxType.DEFAULT}
                                        hasLoadMore={this.currentPage < this.pageCount}
                                        materialClickHandler={this.materialClickHandler}/> :
            <LoadingComponent/>}
        </div>
      </div>);

    const ContentComponent = Content(BodyComponent, {
      headerName: "текущие курсы",
    });
    return <ContentComponent/>;
  }
}

export default CurrentCourses