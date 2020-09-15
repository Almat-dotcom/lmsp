import React, {ChangeEvent, MouseEvent} from "react";
import Content from "../../Content";
import {injectIntl, WrappedComponentProps} from "react-intl";
import PasswordComponent from "./PasswordComponent";

class PasswordDsComponent extends React.Component<WrappedComponentProps> {

  render() {
    const ContentComponent = Content(<PasswordComponent/>, {
      headerName: this.props.intl.formatMessage({id: "menu.myPage.password"}),
    });
    return <ContentComponent/>;
  }
}

export default injectIntl(PasswordDsComponent);