import {MatchParams, RouteComponentProps} from "../../../common/model/RouteComponentProps";
import './style.css';
import {observer} from "mobx-react";
import React from "react";
import {action, observable} from "mobx";
import {restServices} from "../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";
import {BoxType, LogoType} from "../../../common/materialContainer/material/MaterialComponent";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import Content from "../../Content";
import {LearningObject} from "../../../../cuba/entities/tsadv/tsadv$LearningObject";
import {injectIntl, WrappedComponentProps} from "react-intl";
import {SerializedEntity} from "@cuba-platform/rest";
import {Modal, Select} from "antd";
import MaterialContainerComponent, {
  MaterialData,
  MaterialModel,
  MaterialType
} from "../../../common/materialContainer/MaterialContainerComponent";
import {Book} from "../../../../cuba/entities/tsadv/tsadv$Book";
import {file} from "@babel/types";

export interface Props extends RouteComponentProps<MatchParams> {

}

export interface FileType {
  id: string,
  name: string
}

export interface BookMaterialModel extends MaterialModel {
  fileTypes?: FileType[]
}

@observer
class BooksComponent extends React.Component<Props & WrappedComponentProps> {

  @observable books: BookMaterialModel[];

  componentDidMount(): void {
    restServices.tsadv_LmsService.loadBooks(getCubaREST()!, {})().then((response: string) => {
      const books: BookMaterialModel[] = JSON.parse(response);
      this.setBooks(books.map(el => ({
        ...el,
        logo: el.logo ? getCubaREST()!.getFileUploadURL() + "/" + el.logo + "?access_token=" + getCubaREST()!.restApiToken : undefined
      } as BookMaterialModel)));
    })
  }

  @action setBooks = (value: BookMaterialModel[]) => {
    this.books = value;
  };

  downloadBook = (fileId: string) => {
    getCubaREST()!.getFile(fileId).then((value: Blob) => {
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
  };

  selectBookHandler = (value: string) => {
    this.downloadBook(value);
  };

  downloadButtonFooter = (materialData: MaterialData): JSX.Element => {
    const fileTypes: FileType[] | undefined = (materialData as BookMaterialModel).fileTypes;
    if (fileTypes) {
      return <Select defaultValue={this.props.intl.formatMessage({id: 'download'})} className={"select-book"}
                     onSelect={this.selectBookHandler}>
        {fileTypes.map(el => {
          return <Select.Option value={el.id} className={"select-book-option"}>{el.name.toUpperCase()}</Select.Option>
        })}
      </Select>;
    } else {
      return <></>;
    }
  };

  render() {
    const BooksBody = <div className={"container"}>{this.books ?
      <><MaterialContainerComponent boxType={BoxType.DEFAULT}
                                    logoType={LogoType.URL}
                                    footer={this.downloadButtonFooter}
                                    materialData={this.books}/>
      </> :
      <LoadingComponent/>}</div>;

    const ContentComponent = Content(BooksBody, {
      headerName: this.props.intl.formatMessage({id: "menu.knowledgeBase.books"}),
    });
    return <ContentComponent/>
  }
}

export default injectIntl(BooksComponent);