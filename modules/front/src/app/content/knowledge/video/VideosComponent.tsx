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
import MaterialContainerComponent, {
  MaterialModel,
  MaterialType
} from "../../../common/materialContainer/MaterialContainerComponent";

export interface Props extends RouteComponentProps<MatchParams> {

}

@observer
class VideosComponent extends React.Component<Props & WrappedComponentProps> {

  @observable videos: MaterialModel[];

  @observable videoUrl: string | null = null;

  @observable isVisibleModal: boolean = false;

  componentDidMount(): void {
    restServices.tsadv_LmsService.loadLearningObject(getCubaREST()!, {contentType: ContentType.VIDEO})().then((response: string) => {
      const courses: LearningObject[] = JSON.parse(response);
      this.setHistoryCourses(courses.map(el => ({...el, name: el.objectName} as MaterialModel)));
    })
  }

  @action setHistoryCourses = (value: MaterialModel[]) => {
    this.videos = value;
  };

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
    const VideoBody = (videos: MaterialModel[], videoUrl: string | null, isVisibleModal: boolean) => () => {
      return <div>{videos ?
        <><MaterialContainerComponent materialType={MaterialType.NO_BUTTON} boxType={BoxType.DEFAULT}
                                      materialData={videos}
                                      materialClickHandler={this.materialClickHandler}/>
          <Modal width={"90%"} footer={null} visible={isVisibleModal} closable={true} onCancel={() => {
            this.setVideoUrl(null);
            this.setIsVisibleModal(false);
          }}>
            {videoUrl ? <div className={styles["modal-container"]}>
              <video controls={true} src={videoUrl}/>
            </div> : <LoadingComponent loadText={"Пожалуйста подождите, идёт загрузка видео"}/>}
          </Modal>
        </> :
        <LoadingComponent/>}</div>
    };

    const ContentComponent = Content(VideoBody(this.videos, this.videoUrl, this.isVisibleModal));
    return <ContentComponent headerName={this.props.intl.formatMessage({id: "menu.knowledgeBase.videos"})}/>
  }
}

export default injectIntl(VideosComponent);