import React, {ChangeEvent, MouseEvent} from "react";
import Content from "../../Content";
import {injectIntl, WrappedComponentProps} from "react-intl";
import PasswordComponent from "./PasswordComponent";

class PasswordDsComponent extends React.Component<WrappedComponentProps> {

  render() {
    const PasswordContentComponent = () => () => {
      return <PasswordComponent />;
    };

    const ContentComponent = Content(PasswordContentComponent());
    return <ContentComponent headerName={this.props.intl.formatMessage({id: "menu.myPage.password"})}/>;
  }
}

export default injectIntl(PasswordDsComponent);