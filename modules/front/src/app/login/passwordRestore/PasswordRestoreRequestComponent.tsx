import React, { ChangeEvent, FormEvent } from "react";
import {
  FormattedMessage,
  injectIntl,
  WrappedComponentProps
} from "react-intl";
import { RouteComponentProps } from "react-router-dom";
import { MatchParams } from "../../common/model/RouteComponentProps";
import { inject, observer } from "mobx-react";
import { action, observable } from "mobx";
import { restServices } from "../../../cuba/services";
import { Button, Form, Input, notification } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { getCubaREST, injectMainStore, MainStoreInjected } from "@cuba-platform/react";
import { FormComponentProps } from "antd/lib/form";
import H from "history";
import { url } from "inspector";
import { ResponsePojo, ResponsePojoStatus } from "../../common/ResponsePojo";
export interface HistoryProp {
  history: H.History;
}
@injectMainStore
@observer
class PasswordRestoreRequestComponent extends React.Component<
RouteComponentProps<MatchParams> & WrappedComponentProps & HistoryProp & MainStoreInjected
> {
  @observable
  performingRestoreRequest = false;
  @observable
  login: string;
  @action
  changeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    this.login = e.target.value;
  };
  @action
  performRestoreRequest = (e: FormEvent) => {
    e.preventDefault();
    this.performingRestoreRequest = true;
    console.log(this.login);
    if (this.login) {
      const apiUrl = new URL(getCubaREST()!.apiUrl + "password/restore");
      apiUrl.searchParams.append("userLogin", this.login);
      if (this.props.mainStore && this.props.mainStore.locale) {
        apiUrl.searchParams.append("locale", this.props.mainStore.locale);
      }
      fetch(apiUrl.toString(),
        {
          method: "POST",
          headers: {
            LinkURL : window.origin + "/#"
          }
        }).then(response => {
          return response.json();
        }).then((response: ResponsePojo) => {
          if (!response) {
            notification.error(
              {
                message: this.props.intl.formatMessage(
                  { id: "resetPassword.unknownError" }
                )
              });
          }
          if (response && response.status == ResponsePojoStatus.SUCCESS) {
            notification.success(
              {
                message: this.props.intl.formatMessage(
                  { id: response.message }
                )
              });
              this.performingRestoreRequest = true;
              this.props.history.push("/");
          }
          else {
            notification.error(
              {
                message: this.props.intl.formatMessage(
                  { id: response.message }
                )
              }
            )
          }
        }).catch(error => {
          console.log(error.message);
          notification.error(
            {
              message: this.props.intl.formatMessage(
                { id: "resetPassword.unknownError" }
              )
            });
        });
        this.performingRestoreRequest = true;
    }
  }
  render() {
    return (
      <div className="login-form">
        <span>
          <a onClick={() => this.props.history.push("/")}>{this.props.intl.formatMessage( { id : "restorePassword.backToLoginLabel"})}</a>
        </span>
        <Form onSubmit={this.performRestoreRequest}>
          <FormItem required={true} label={this.props.intl.formatMessage( { id : "restorePassword.currentLoginLabel"} ) + ":"}>
            <Input
              required
              type={"text"}
              value={this.login}
              onChange={this.changeLogin}
            />
          </FormItem>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block={true}
              loading={this.performingRestoreRequest}
              shape={"round"}
            >
              <FormattedMessage id="restorePassword.restoreBtn" />
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default injectIntl(PasswordRestoreRequestComponent);
