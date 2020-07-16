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
class TrainingPdfComponent extends React.Component<TrainingVideoComponentProps> {

  @observable fileBlobUrl: string | null = null;

  componentDidMount(): void {
    const videoFileId: string = this.props.content.file.id;
    getCubaREST()!.getFile(videoFileId).then((value: Blob) => {
      this.setFileBlobUrl(URL.createObjectURL(value));
    }).catch(() => {
    })
  }

  @action setFileBlobUrl = (value: string | null) => {
    this.fileBlobUrl = value;
  };

  onClickLinkHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log(e);
  };

  render() {
    return <div className={"section-container-body"}>
      {this.fileBlobUrl ?
        <a href={this.fileBlobUrl!} target={"_blank"} onClick={this.onClickLinkHandler}>Просмотреть книгу</a>
        : <LoadingComponent loadText={"Пожалуйста подождите, загружается PDF файл"}/>}
    </div>;
  }
}

export default TrainingPdfComponent