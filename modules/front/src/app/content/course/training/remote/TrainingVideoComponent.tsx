import React, {SyntheticEvent} from "react";
import {LearningObject} from "../../../../../cuba/entities/tsadv/tsadv$LearningObject";
import {getCubaREST} from "@cuba-platform/react";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import LoadingComponent from "../../../../common/loading/LoadingComponent";
import styles from './style.module.css'

interface TrainingVideoComponentProps {
  sectionId: string,
  content: LearningObject,
  enrollmentId: string
}

@observer
class TrainingVideoComponent extends React.Component<TrainingVideoComponentProps> {

  @observable videoUrl: string | null | undefined = undefined;

  componentDidMount(): void {
    const videoFileId: string = this.props.content.file.id;
    getCubaREST()!.getFile(videoFileId).then((value: Blob) => {
      this.setVideoUrl(URL.createObjectURL(value));
    }).catch(() => {
      this.setVideoUrl(null);
    })
  }

  @action setVideoUrl = (value: string | null | undefined) => {
    this.videoUrl = value;
  };

  onPlayVideoHandler = (e: SyntheticEvent<HTMLVideoElement>) => {
    console.log(this.props.enrollmentId);
  };

  render() {
    if (this.videoUrl === undefined) {
      return <LoadingComponent/>
    }
    if (this.videoUrl === null) {
      return <h2 className={styles["error"]}>Не удалось загрузить видео!</h2>
    }

    return <div className={"section-container-body"}>
      <video src={this.videoUrl!} controls={true}
             onPlay={this.onPlayVideoHandler}/>
    </div>;
  }
}

export default TrainingVideoComponent