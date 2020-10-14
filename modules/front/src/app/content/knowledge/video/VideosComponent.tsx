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
import {Modal} from "antd";
import {SerializedEntity} from "@cuba-platform/rest";
import styles from './style.module.css'
import {ContentType} from "../../../../cuba/enums/enums";
import MaterialContainerComponent, {MaterialModel} from "../../../common/materialContainer/MaterialContainerComponent";
import PaginationLoadParent, {PageWithData, PromiseFunc} from "../../../common/PaginationLoadParent";
import {BookMaterialModel} from "../books/BooksComponent";

export interface Props extends RouteComponentProps<MatchParams> {

}

@observer
class VideosComponent extends PaginationLoadParent<MaterialModel, Props & WrappedComponentProps> {

  getLoadParams = (): PromiseFunc => {
    return {
      loadFunc: restServices.tsadv_LmsService.loadLearningObject,
      loadParams: {contentType: ContentType.VIDEO}
    }
  };

  parseResponseToData = (response: string): BookMaterialModel[] => {
    const responseData: LearningObject[] = JSON.parse(response);
    return responseData.map(el => ({...el, name: el.objectName} as MaterialModel));
  };


  parsePageResponseToData = (response: string): PageWithData => {
    const responseData: PageWithData = JSON.parse(response);
    return {
      pageCount: responseData.pageCount,
      data: responseData.data.map((el: LearningObject) => ({...el, name: el.objectName} as MaterialModel))
    }
  };


  @observable videoUrl: string | null = null;

  @observable isVisibleModal: boolean = false;

  @action setVideoUrl = (value: string | null) => {
    this.videoUrl = value;
  };

  @action setIsVisibleModal = (value: boolean) => {
    this.isVisibleModal = value;
  };

  materialClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.setIsVisibleModal(true);
    getCubaREST()!.loadEntity(LearningObject.NAME, e.currentTarget.dataset.id, {view: "learningObject.browse"}).then((r: SerializedEntity<LearningObject>) => {
      const videoFileId: string = r.file.id;
      getCubaREST()!.getFile(videoFileId).then((value: Blob) => {
        this.setVideoUrl(URL.createObjectURL(value));
      }).catch(() => {
        this.setVideoUrl(null);
      });
    }).catch(() => {
      Modal.error({
        title: this.props.intl.formatMessage({id: "modal.error.title"}),
        content: this.props.intl.formatMessage({id: "video.error.load"}),
      })
    });
  };

  render() {
    const VideoBody = <div>{this.loadedData ?
      <><MaterialContainerComponent boxType={BoxType.DEFAULT}
                                    materialData={this.loadedData}
                                    hasLoadMore={this.currentPage < this.pageCount}
                                    loadMoreClickHandler={this.incrementPage}
                                    materialClickHandler={this.materialClickHandler}/>
        <Modal width={"90%"} footer={null} visible={this.isVisibleModal} closable={true} onCancel={() => {
          this.setVideoUrl(null);
          this.setIsVisibleModal(false);
        }}>
          {this.videoUrl ? <div className={styles["modal-container"]}>
            <video controls={true} src={this.videoUrl}/>
          </div> : <LoadingComponent loadText={"Пожалуйста подождите, идёт загрузка видео"}/>}
        </Modal>
      </> :
      <LoadingComponent/>}</div>;

    const ContentComponent = Content(VideoBody, {
      headerName: this.props.intl.formatMessage({id: "menu.knowledgeBase.videos"}),
    });
    return <ContentComponent/>
  }
}

export default injectIntl(VideosComponent);