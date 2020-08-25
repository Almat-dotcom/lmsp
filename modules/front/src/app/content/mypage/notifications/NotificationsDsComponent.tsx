import * as React from "react";
import {observer} from "mobx-react";
import {action, observable} from "mobx";
import moment from "moment";
import {restServices} from "../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";
import MyProgressComponent, {ProgressLine} from "../progress/MyProgressDsComponent";
import Content from "../../Content";
import NotificationComponent from "./NotificationComponent";
import {injectIntl, WrappedComponentProps} from "react-intl";

export interface Notification {
  id: string,
  date: moment.Moment,
  readed: boolean,
  contentText: string,
  caption: string,
}

@observer
class NotificationsDsComponent extends React.Component<WrappedComponentProps> {

  @observable notifications: Notification[] | undefined = undefined;

  componentDidMount(): void {
    restServices.tsadv_LmsService.getPersonNotifications(getCubaREST()!)().then((response: string) => {
      const notifications: Notification[] = JSON.parse(response);
      this.setNotifications(notifications)
    });
  }

  @action setNotifications = (value: Notification[] | undefined) => {
    this.notifications = value;
  };

  @action setReadedNotification = (value: Notification) => {
    if (this.notifications) {
      const changeNotifications: Notification[] = [];
      for (let i = 0; i < this.notifications.length; i++) {
        let notification = this.notifications[i];
        if (notification === value) {
          notification.readed = true;
        }
        changeNotifications.push(notification);
      }
      this.setNotifications(changeNotifications);
    }
  };

  render() {
    const NotificationsContentComponent = (notifications: Notification[] | undefined) => () => {
      return <div>
        <NotificationComponent notifications={notifications} setReadedNotification={this.setReadedNotification}/>
      </div>
    };

    const ContentComponent = Content(NotificationsContentComponent(this.notifications));
    return <ContentComponent headerName={this.props.intl.formatMessage({id: "notifications"})}
                             contentWrapperCss={{padding: '50px'}}/>;
  }
}

export default injectIntl(NotificationsDsComponent)