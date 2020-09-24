import React from "react";
import {observer} from "mobx-react";
import {action, observable} from "mobx";
import {getCubaREST} from "@cuba-platform/react";
import {MatchParams, RouteComponentProps} from "../../../../common/model/RouteComponentProps";
import {injectIntl, WrappedComponentProps} from "react-intl";
import {LearningObject} from "../../../../../cuba/entities/base/tsadv$LearningObject";
import LoadingComponent from "../../../../common/loading/LoadingComponent";
import {SerializedEntity} from "@cuba-platform/rest";
import {Modal} from "antd";
import Content from "../../../Content";

interface Props extends RouteComponentProps<MatchParams> {
}

export interface CourseData {
  id: string,
  name?: string,
  enrollmentId: string | null,
  description: string,
  logo?: string,
  sections?: CourseSectionItem[]
}

export interface CourseSectionItem {
  id: string,
  sectionName: string,
  order: number,
  isPassed: boolean,
  langValue1: string
}

@observer
class ArticleComponent extends React.Component<Props & WrappedComponentProps> {

  @observable article: LearningObject | null = null;

  componentDidMount(): void {
    getCubaREST()!.loadEntity(LearningObject.NAME, this.props.match.params.id, {view: "learningObject.browse"}).then((r: SerializedEntity<LearningObject>) => {
      this.setArticle(r as LearningObject);
    }).catch(() => {
      Modal.error({
        title: this.props.intl.formatMessage({id: "modal.error.title"}),
        content: this.props.intl.formatMessage({id: "book.error.load"}),
      })
    });

  }

  @action setArticle = (value: LearningObject | null) => {
    this.article = value;
  };

  render() {
    const CourseComponent = <div className={"course-container"}>
      {this.article ? <>
          <div dangerouslySetInnerHTML={{__html: this.article.text!}}/>
        </> :
        <LoadingComponent/>}
    </div>;

    const ContentComponent = Content(CourseComponent, {
      headerName: "Статья: " + (this.article ? this.article.objectName! : ""),
    });
    return <ContentComponent/>;
  }
}

export default injectIntl(ArticleComponent);