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
import {SerializedEntity} from "@cuba-platform/rest";
import {Modal} from "antd";
import MaterialContainerComponent, {
  MaterialModel,
  MaterialType
} from "../../../common/materialContainer/MaterialContainerComponent";

export interface Props extends RouteComponentProps<MatchParams> {

}

@observer
class BooksComponent extends React.Component<Props & WrappedComponentProps> {

  @observable books: MaterialModel[];

  componentDidMount(): void {
    restServices.tsadv_LmsService.loadLearningObject(getCubaREST()!, {contentType: ContentType.PDF})().then((response: string) => {
      const courses: LearningObject[] = JSON.parse(response);
      this.setHistoryCourses(courses.map(el => ({...el, name: el.objectName} as MaterialModel)));
    })
  }

  @action setHistoryCourses = (value: MaterialModel[]) => {
    this.books = value;
  };

  courseClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    getCubaREST()!.loadEntity(LearningObject.NAME, e.currentTarget.dataset.id, {view: "learningObject.browse"}).then((r: SerializedEntity<LearningObject>) => {
      const videoFileId: string = r.file.id;
      getCubaREST()!.getFile(videoFileId).then((value: Blob) => {

        const anchor = document.createElement('a');
        anchor.href = URL.createObjectURL(value);
        anchor.target = '_blank';

        anchor.click();
      }).catch(() => {
        Modal.error({
          title: this.props.intl.formatMessage({id: "modal.error.title"}),
          content: this.props.intl.formatMessage({id: "book.error.load"}),
        })
      });
    }).catch(() => {
      Modal.error({
        title: this.props.intl.formatMessage({id: "modal.error.title"}),
        content: this.props.intl.formatMessage({id: "book.error.load"}),
      })
    });
  };

  render() {
    const BooksBody = (books: MaterialModel[]) => () => {
      return <div className={"container"}>{books ?
        <><MaterialContainerComponent materialType={MaterialType.NO_BUTTON} boxType={BoxType.DEFAULT}
                                      materialData={books}
                                      materialClickHandler={this.courseClickHandler}/>
        </> :
        <LoadingComponent/>}</div>
    };

    const ContentComponent = Content(BooksBody(this.books));
    return <ContentComponent headerName={this.props.intl.formatMessage({id: "menu.knowledgeBase.books"})}/>
  }
}

export default injectIntl(BooksComponent);