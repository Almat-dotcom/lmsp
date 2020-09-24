import React, {SyntheticEvent} from "react";
import {LearningObject} from "../../../../../cuba/entities/base/tsadv$LearningObject";
import {getCubaREST} from "@cuba-platform/react";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import {Spin} from "antd";

interface TrainingVideoComponentProps {
  sectionId: string,
  content: LearningObject,
  enrollmentId: string
}

@observer
class TrainingPdfComponent extends React.Component<TrainingVideoComponentProps> {

  @observable fileBlobUrl: string | null = null;

  componentDidMount(): void {
    const videoFileId: string = this.props.content.file!.id!;
    getCubaREST()!.getFile(videoFileId).then((value: Blob) => {
      this.setFileBlobUrl(URL.createObjectURL(value));
    }).catch(() => {
    })
  }

  @action setFileBlobUrl = (value: string | null) => {
    this.fileBlobUrl = value;
  };

  render() {
    return <Spin spinning={this.fileBlobUrl == null} tip={"Пожалуйста подождите, загружается файл"}>
      <div className={"section-container-body"}>
        <iframe src={this.fileBlobUrl!} width={"100%"}/>
      </div>
    </Spin>
  }
}

export default TrainingPdfComponent