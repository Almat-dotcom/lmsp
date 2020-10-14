import {MatchParams, RouteComponentProps} from "../../../common/model/RouteComponentProps";
import './style.css';
import {observer} from "mobx-react";
import React from "react";
import {restServices} from "../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";
import {BoxType, LogoType} from "../../../common/materialContainer/material/MaterialComponent";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import Content from "../../Content";
import {injectIntl, WrappedComponentProps} from "react-intl";
import {Modal, Select} from "antd";
import MaterialContainerComponent, {
  MaterialData,
  MaterialModel
} from "../../../common/materialContainer/MaterialContainerComponent";
import PaginationLoadParent, {PageWithData, PromiseFunc} from "../../../common/PaginationLoadParent";

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
class BooksComponent extends PaginationLoadParent<BookMaterialModel, Props & WrappedComponentProps> {

  getLoadParams = (): PromiseFunc => {
    return {loadFunc: restServices.tsadv_LmsService.loadBooks};
  };

  parseResponseToData = (response: string): BookMaterialModel[] => {
    const books: BookMaterialModel[] = JSON.parse(response);
    return books.map(el => ({
      ...el,
      logo: el.logo ? getCubaREST()!.getFileUploadURL() + "/" + el.logo + "?access_token=" + getCubaREST()!.restApiToken : undefined
    } as BookMaterialModel));
  };

  parsePageResponseToData = (response: string): PageWithData => {
    const responseData: PageWithData = JSON.parse(response);
    return {
      pageCount: responseData.pageCount,
      data: responseData.data.map((el: MaterialData) => ({
        ...el,
        logo: el.logo ? getCubaREST()!.getFileUploadURL() + "/" + el.logo + "?access_token=" + getCubaREST()!.restApiToken : undefined
      } as BookMaterialModel))
    }
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
    const BooksBody = <div className={"container"}>{this.loadedData ?
      <><MaterialContainerComponent boxType={BoxType.DEFAULT}
                                    logoType={LogoType.URL}
                                    footer={this.downloadButtonFooter}
                                    hasLoadMore={this.currentPage < this.pageCount}
                                    materialData={this.loadedData}
                                    loadMoreClickHandler={this.incrementPage}/>
      </> :
      <LoadingComponent/>}</div>;

    const ContentComponent = Content(BooksBody, {
      headerName: this.props.intl.formatMessage({id: "menu.knowledgeBase.books"}),
    });
    return <ContentComponent/>
  }
}

export default injectIntl(BooksComponent);