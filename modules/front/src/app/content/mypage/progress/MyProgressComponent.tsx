import React from "react";
import {injectIntl, IntlShape, WrappedComponentProps} from "react-intl";
import {observer} from "mobx-react";
import {Modal, Spin, Table} from "antd";
import {ProgressLine} from "./MyProgressDsComponent";
import {getCubaREST} from "@cuba-platform/react";
import {restServices} from "../../../../cuba/services";
import {action, observable} from "mobx";

interface MyProgressComponentProps {
  progress: ProgressLine[]
}

interface LoadState {
  loading: boolean
  message: string
}

@observer
class MyProgressComponent extends React.Component<MyProgressComponentProps & WrappedComponentProps> {

  @observable loadState: LoadState = {
    loading: false,
    message: ""
  };

  columns = [{
    title: getTableTitleName(this.props.intl, 'lineNum'),
    dataIndex: 'lineNum',
    key: 'lineNum',
  }, {
    title: getTableTitleName(this.props.intl, 'startDate'),
    dataIndex: 'startDate',
    key: 'startDate',
  },{
    title: getTableTitleName(this.props.intl, 'endDate'),
    dataIndex: 'endDate',
    key: 'endDate',
  },{
    title: getTableTitleName(this.props.intl, 'courseName'),
    dataIndex: 'courseName',
    key: 'courseName',
  }, {
    title: getTableTitleName(this.props.intl, 'fio'),
    dataIndex: 'fio',
    key: 'fio',
  }, {
    title: getTableTitleName(this.props.intl, 'result'),
    dataIndex: 'result',
    key: 'result',
    render: (result: any, progressLine: ProgressLine) => {
      return <span>{`${progressLine.score} ${this.props.intl.formatMessage({id: 'myProgress.table.column.result.of'})} ${progressLine.maxScore}`}</span>
    }
  }, {
    title: getTableTitleName(this.props.intl, 'countFailed'),
    dataIndex: 'countFailed',
    key: 'countFailed',
  }, {
    title: getTableTitleName(this.props.intl, 'certificateUrl'),
    dataIndex: 'certificateUrl',
    key: 'certificateUrl',
    render: (url: string) => {
      return url ? <a data-certificate-id={url}
                      onClick={this.certificateClick}>{this.props.intl.formatMessage({id: 'myProgress.table.column.certificateUrl.view'})}</a> : <></>
    }
  }];

  @action setLoadState = (value: LoadState) => {
    this.loadState = value;
  };

  certificateClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    //TODO: локализация
    this.setLoadState({loading: true, message: "Пожалуйста подождите, идёт загрузка сертификата"});
    e.preventDefault();
    const certificateId: string | undefined = e.currentTarget.dataset.certificateId;
    if (certificateId === undefined) {
      //TODO: локализация
      this.setLoadState({loading: false, message: ""});
      Modal.error({
        title: 'Не удалось загрузить сертификат'
      });
      return;
    }
    restServices.tsadv_LmsService.getCertificate(getCubaREST()!, {enrollmentId: certificateId})().then((fileId: string) => {
      if (fileId.trim() === '') {
        //TODO: локализация
        Modal.error({
          title: 'Не удалось загрузить сертификат'
        });
        return;
      }
      getCubaREST()!.getFile(fileId).then((value: Blob) => {
        const anchor = document.createElement('a');
        anchor.href = URL.createObjectURL(value);
        anchor.target = '_blank';
        anchor.click();

        restServices.tsadv_LmsService.removeCertificate(getCubaREST()!, {certificateFileId: fileId})().then(response => {
        }).finally(() => this.setLoadState({loading: false, message: ""}));
      }).finally(() => this.setLoadState({loading: false, message: ""}));
    }).finally(() => this.setLoadState({loading: false, message: ""}));
  };

  render() {
    return <div>
      <Spin spinning={this.loadState.loading} tip={this.loadState.message}>
        <Table style={{overflowX: 'scroll'}} columns={this.columns} bordered={true} dataSource={this.props.progress}/>
      </Spin>
    </div>
  }
}

const getTableTitleName = (intl: IntlShape, name: string) => {
  const tableTitle = "myProgress.table.column.";
  return intl.formatMessage({id: tableTitle + name})
};

export default injectIntl(MyProgressComponent);