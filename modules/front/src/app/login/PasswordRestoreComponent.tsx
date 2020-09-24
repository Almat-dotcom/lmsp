import React, { ChangeEvent, FormEvent } from "react";
import {
  FormattedMessage,
  injectIntl,
  WrappedComponentProps
} from "react-intl";
import { RouteComponentProps } from "react-router-dom";
import { MatchParams } from "../common/model/RouteComponentProps";
import { inject, observer } from "mobx-react";
import { action, observable } from "mobx";
import { restServices } from "../../cuba/services";
import { Button, Form, Input, notification } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { getCubaREST } from "@cuba-platform/react";
import { FormComponentProps } from "antd/lib/form";
import H from "history";
export interface HistoryProp {
  history: H.History;
}
@observer
class PasswordRestoreComponent extends React.Component<
  RouteComponentProps<MatchParams> & WrappedComponentProps & HistoryProp
> {
  @observable
  performingRestoreRequest = false;
  @observable
  login: string;
  @action
  changeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    this.login = e.target.value;
    console.log(this.login);
  };
  @action
  performRestoreRequest = (e: FormEvent) => {
    e.preventDefault();
    console.log(this.login);
    if (this.login) {
      restServices.tsadv_LmsService
        .restorePassword(getCubaREST()!, { userLogin: this.login })()
        .then((responseString: string) => {
          const response: Response = JSON.parse(responseString);
          console.log(response.status);
        });
    }
  }
  render() {
    return (
      <div className="login-form">
        <span>
          <a onClick={() => this.props.history.push("/")}>Обратно на вход</a>
        </span>
        <Form onSubmit={this.performRestoreRequest}>
          <FormItem required={true} label={"Текущий логин:"}>
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
              <FormattedMessage id="restore.restoreBtn" />
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default injectIntl(PasswordRestoreComponent);
