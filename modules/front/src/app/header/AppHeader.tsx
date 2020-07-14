import {Button, Modal} from "antd";
import * as React from "react";
import {observer} from "mobx-react";
import "./AppHeader.css";
import logo from "../logo.png";
import smallLogo from "../logo-small.png";
import {injectMainStore, MainStoreInjected} from "@cuba-platform/react";
import {LanguageSwitcher} from "../../i18n/LanguageSwitcher";
import {injectIntl, WrappedComponentProps} from "react-intl";
import Menu from "./menu/Menu";
import {NavLink} from "react-router-dom";

@injectMainStore
@observer
class AppHeader extends React.Component<MainStoreInjected & WrappedComponentProps> {
  render() {
    const appState = this.props.mainStore!;
    return (
      <div className="app-header">
        <div className={"header-container"}>
          <NavLink to={"/"}>
            <img
              className={"logo"}
              src={logo}
              alt={this.props.intl.formatMessage({id: "common.alt.logo"})}
            /><img
              className={"logo-small"}
              src={smallLogo}
              alt={this.props.intl.formatMessage({id: "common.alt.logo"})}
            /></NavLink>
        </div>
        <Menu/>
        <div className="user-panel">
          <LanguageSwitcher className="panelelement language-switcher -header"/>
          <span className="panelelement">{appState.userName}</span>
          <Button
            className="panelelement"
            ghost={true}
            icon="logout"
            style={{border: 0, color: 'black'}}
            onClick={this.showLogoutConfirm}
          />
        </div>
      </div>
    );
  }

  showLogoutConfirm = () => {
    Modal.confirm({
      title: this.props.intl.formatMessage({id: "header.logout.areYouSure"}),
      okText: this.props.intl.formatMessage({id: "header.logout.ok"}),
      cancelText: this.props.intl.formatMessage({id: "header.logout.cancel"}),
      onOk: () => {
        this.props.mainStore!.logout();
      }
    });
  };
}

export default injectIntl(AppHeader);
