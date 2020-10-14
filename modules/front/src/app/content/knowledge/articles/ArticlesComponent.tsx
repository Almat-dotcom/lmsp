import {MatchParams, RouteComponentProps} from "../../../common/model/RouteComponentProps";
import {observer} from "mobx-react";
import React from "react";
import {restServices} from "../../../../cuba/services";
import {BoxType} from "../../../common/materialContainer/material/MaterialComponent";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import Content from "../../Content";
import {LearningObject} from "../../../../cuba/entities/tsadv/tsadv$LearningObject";
import {injectIntl, WrappedComponentProps} from "react-intl";
import {ContentType} from "../../../../cuba/enums/enums";
import MaterialContainerComponent, {MaterialModel} from "../../../common/materialContainer/MaterialContainerComponent";
import PaginationLoadParent, {PromiseFunc} from "../../../common/PaginationLoadParent";

export interface Props extends RouteComponentProps<MatchParams> {

}

@observer
class ArticlesComponent extends PaginationLoadParent<LearningObject, Props & WrappedComponentProps> {
  getLoadParams = (): PromiseFunc => {
    return {
      loadFunc: restServices.tsadv_LmsService.loadLearningObject,
      loadParams: {contentType: ContentType.TEXT}
    }
  };

  parseResponseToData = (response: string): any => {
    const learningObjects: LearningObject[] = JSON.parse(response);
    return learningObjects.map(el => ({...el, name: el.objectName} as MaterialModel));
  };

  courseClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.props.history.push("/article/" + e.currentTarget.dataset.id);
  };

  render() {
    const ArticlesBody = <div className={"container"}>{this.loadedData ?
      <><MaterialContainerComponent boxType={BoxType.DEFAULT}
                                    materialData={this.loadedData}
                                    hasLoadMore={this.currentPage < this.pageCount}
                                    loadMoreClickHandler={this.incrementPage}
                                    materialClickHandler={this.courseClickHandler}/>
      </> :
      <LoadingComponent/>}</div>;

    const ContentComponent = Content(ArticlesBody, {
      headerName: this.props.intl.formatMessage({id: "menu.knowledgeBase.articles"}),
    });
    return <ContentComponent/>
  }
}

export default injectIntl(ArticlesComponent);