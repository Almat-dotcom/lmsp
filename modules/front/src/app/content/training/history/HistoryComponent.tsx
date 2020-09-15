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
import MaterialContainerComponent, {MaterialType} from "../../../common/materialContainer/MaterialContainerComponent";

export interface Props extends RouteComponentProps<MatchParams> {
}

@observer
class HistoryComponent extends React.Component<Props> {

  @observable private historyCourses: Course[];

  componentDidMount(): void {
    restServices.tsadv_LmsService.getPersonHistory(getCubaREST()!)().then((response: string) => {
      const courses: Course[] = JSON.parse(response);
      this.setHistoryCourses(courses);
    })
  }

  @action setHistoryCourses = (value: Course[]) => {
    this.historyCourses = value;
  };

  materialClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.props.history.push("/course/" + e.currentTarget.dataset.id);
  };

  render() {
    const HistoryBody = <div>{this.historyCourses ?
      <MaterialContainerComponent boxType={BoxType.DEFAULT}
                                  materialData={this.historyCourses}
                                  materialClickHandler={this.materialClickHandler}/> :
      <LoadingComponent/>}</div>;

    const ContentComponent = Content(HistoryBody, {
      headerName: "История",
    });
    return <ContentComponent/>
  }
}

export default HistoryComponent;