import * as React from "react";
import {Button, Modal, Spin, Table} from "antd";
import {injectIntl, IntlShape, WrappedComponentProps} from "react-intl";
import {Notification} from "./NotificationsDsComponent";
import styles from './style.module.css';
import moment from "moment";
import {observer} from "mobx-react";
import {action, observable} from "mobx";
import {restServices} from "../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";
import {ButtonHTMLType} from "antd/es/button/button";

interface NotificationComponentProps {
  notifications: Notification[] | undefined
}

interface NotificationComponentHandlers {
  setReadedNotification: (value: Notification) => void
}


@observer
class NotificationComponent extends React.Component<NotificationComponentProps & WrappedComponentProps & NotificationComponentHandlers> {

  @observable selectedNotification: Notification | null = null;

  @observable loadingNotification: boolean = false;

  @observable modalContent: Notification;

  columns = [{
    title: getTableTitleName(this.props.intl, 'caption'),
    dataIndex: 'caption',
    key: 'caption',
  }, {
    title: getTableTitleName(this.props.intl, 'date'),
    dataIndex: 'date',
    key: 'date',
    render: (result: any, notification: Notification) => {
      return <span>{moment(notification.date).format('DD.MM.YYYY')}</span>
    },
    sorter: (a: Notification, b: Notification) => {
      return moment(a.date).unix() - moment(b.date).unix();
    }
  }];


  @action setSelectedNotification(value: Notification | null) {
    this.selectedNotification = value;
  }

  @action setLoadingNotification(value: boolean) {
    this.loadingNotification = value;
  }

  onTableRowClick = (record: Notification, index: number, event: Event) => {
    this.setLoadingNotification(true);
    restServices.tsadv_LmsService.getNotification(getCubaREST()!, {notificationId: record.id})().then((response: string) => {
      const modalContent: Notification = JSON.parse(response).sendingMessage;
      this.setSelectedNotification(record);
      Modal.info({
        maskClosable: false,
        okButtonProps: {htmlType: "button"},
        icon: null,
        okText: this.props.intl.formatMessage({id: 'close'}),
        onOk: () => {
          this.props.setReadedNotification(this.selectedNotification!);
        },
        content: <div className={styles["modal-container"]}>
          <div className={styles["modal-section"]}>
            <span className={styles["modal-section-name"]}>{this.props.intl.formatMessage({id: 'theme'})}:</span>
            <span>{modalContent.caption}</span>
          </div>
          <div className={styles["modal-section"]}>
            <span className={styles["modal-section-name"]}>{this.props.intl.formatMessage({id: 'description'})}:</span>
            <div dangerouslySetInnerHTML={{__html: modalContent.contentText}}/>
          </div>
        </div>
      })
    }).finally(() => {
      this.setLoadingNotification(false);
    });
  };

  rowClassName = (record: Notification, index: number) => {
    return !record.readed ? styles["unread"] : ""
  };

  render() {
    //TODO: локализация
    return <Spin spinning={this.loadingNotification} tip={"Пожалуйста подождите, загружается уведомление"}>
      <Table columns={this.columns} bordered={true} dataSource={this.props.notifications}
             className={styles["notification-table"]}
             loading={this.props.notifications === undefined} onRowClick={this.onTableRowClick}
             rowClassName={this.rowClassName} rowKey={"id"}/>
    </Spin>
  }
}


const getTableTitleName = (intl: IntlShape, name: string) => {
  const tableTitle = "notifications.table.column.";
  return intl.formatMessage({id: tableTitle + name})
};

export default injectIntl(NotificationComponent);