import {MatchParams, RouteComponentProps} from "../../../common/model/RouteComponentProps";
import {observer} from "mobx-react";
import React from "react";
import {action, observable} from "mobx";
import {restServices} from "../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";
import {BoxType} from "../../../common/materialContainer/material/MaterialComponent";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import Content from "../../Content";
import {LearningObject} from "../../../../cuba/entities/tsadv/tsadv$LearningObject";
import {injectIntl, WrappedComponentProps} from "react-intl";
import {ContentType} from "../../../../cuba/enums/enums";
import MaterialContainerComponent, {
  MaterialModel,
  MaterialType
} from "../../../common/materialContainer/MaterialContainerComponent";

export interface Props extends RouteComponentProps<MatchParams> {

}

@observer
class ArticlesComponent extends React.Component<Props & WrappedComponentProps> {

  @observable articles: MaterialModel[];

  componentDidMount(): void {
    restServices.tsadv_LmsService.loadLearningObject(getCubaREST()!, {contentType: ContentType.TEXT})().then((response: string) => {
      const learningObjects: LearningObject[] = JSON.parse(response);
      this.setArticles(learningObjects.map(el => ({...el, name: el.objectName} as MaterialModel)));
    })
  }

  @action setArticles = (value: MaterialModel[]) => {
    this.articles = value;
  };

  courseClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.props.history.push("/article/" + e.currentTarget.dataset.id);
  };

  render() {
    const ArticlesBody = <div className={"container"}>{this.articles ?
      <><MaterialContainerComponent boxType={BoxType.DEFAULT}
                                    materialData={this.articles}
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