import {MatchParams, RouteComponentProps} from "../../../common/model/RouteComponentProps";
import {observer} from "mobx-react";
import React from "react";
import {action, observable} from "mobx";
import {restServices} from "../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";
import CourseComponent, {ComponentItemModel, CourseType} from "../../../common/CourseComponent/CourseComponent";
import {BoxType} from "../../../common/CourseComponent/CourseItemComponent/CourseItemComponent";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import Content from "../../Content";
import {LearningObject} from "../../../../cuba/entities/tsadv/tsadv$LearningObject";
import {injectIntl, WrappedComponentProps} from "react-intl";
import {ContentType} from "../../../../cuba/enums/enums";
import {SerializedEntity} from "@cuba-platform/rest";
import {Modal} from "antd";

export interface Props extends RouteComponentProps<MatchParams> {

}

@observer
class ArticlesComponent extends React.Component<Props & WrappedComponentProps> {

  @observable articles: ComponentItemModel[];

  componentDidMount(): void {
    restServices.tsadv_LmsService.loadLearningObject(getCubaREST()!, {contentType: ContentType.TEXT})().then((response: string) => {
      const learningObjects: LearningObject[] = JSON.parse(response);
      this.setArticles(learningObjects.map(el => ({...el, name: el.objectName} as ComponentItemModel)));
    })
  }

  @action setArticles = (value: ComponentItemModel[]) => {
    this.articles = value;
  };

  courseClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.props.history.push("/article/" + e.currentTarget.dataset.id);
  };

  render() {
    const ArticlesBody = (articles: ComponentItemModel[]) => () => {
      return <div className={"container"}>{articles ?
        <><CourseComponent courseType={CourseType.NO_BUTTON} boxType={BoxType.DEFAULT} courses={articles}
                           courseClickHandler={this.courseClickHandler}/>
        </> :
        <LoadingComponent/>}</div>
    };

    const ContentComponent = Content(ArticlesBody(this.articles));
    return <ContentComponent headerName={this.props.intl.formatMessage({id: "menu.knowledgeBase.articles"})}/>
  }
}

export default injectIntl(ArticlesComponent);