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
import Password from "antd/lib/input/Password";
import Item from "antd/lib/list/Item";
import { ResponsePojo, ResponsePojoStatus } from "../../common/ResponsePojo";
export interface HistoryProp {
    history: H.History;
}
@observer
class PasswordRestoreChangePasswordComponent extends React.Component<
RouteComponentProps<MatchParams> & WrappedComponentProps & HistoryProp & MainStoreInjected
> {
    @observable
    performingRestoreRequest = false;
    @observable
    password: string;
    @observable
    confirmPassword: string;
    passwordChangeToken: string;
    passwordField : Input | null;
    @action
    changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        this.password = e.target.value;
    };
    @action
    changeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        this.confirmPassword = e.target.value;
    }
    @action
    performChangePasswordRequest = async (e: FormEvent) => {
        e.preventDefault();
        this.performingRestoreRequest = true;
        if (this.password != this.confirmPassword) {
            notification.error({
                message: this.props.intl.formatMessage({ id :"restorePassword.passwordsNotEqualError" })
            });
            this.performingRestoreRequest = false;
            return;
        }
        if (this.password) {
            const apiUrl = new URL(getCubaREST()!.apiUrl + "password/change");
            apiUrl.searchParams.append("newPassword", this.password);
            apiUrl.searchParams.append("token", this.passwordChangeToken)
            fetch(apiUrl.toString(),
                {
                    method: "POST",
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
                    notification.error(
                        {
                            message: this.props.intl.formatMessage(
                                { id: "resetPassword.unknownError" }
                            )
                        });
                });
            this.performingRestoreRequest = false;

        }
    }
    componentDidMount = () => {
        const token: string | null = new URLSearchParams(this.props.location.search).get("token");
        if (!token) {
            notification.error({ message: this.props.intl.formatMessage({ id: "resetPassword.emptyToken" }) });
            this.props.history.push("/");
        }
        else {
            this.passwordChangeToken = token;
        }
        // this.passwordField!.focus();
    }
    render() {
        return (
            <div className="login-form">
                <span>
                    <a onClick={() => this.props.history.push("/")}>{this.props.intl.formatMessage({ id: "restorePassword.backToLoginLabel" })}</a>
                </span>
                <Form onSubmit={this.performChangePasswordRequest}>
                    <Form.Item required={true} label={this.props.intl.formatMessage({ id: "resetPassword.newPasswordLabel"}) + ":"}>
                        <Input
                            ref={(input)=>this.passwordField = input}
                            type="password"
                            required
                            onFocus={(element) => element.target.removeAttribute("readonly")}
                            readOnly
                            value={this.password}
                            onChange={this.changePassword}
                        />
                    </Form.Item>
                    <Form.Item required={true} label={this.props.intl.formatMessage({ id: "resetPassword.confirmPasswordLabel"}) + ":"}>
                        <Input
                            type="password"
                            required
                            autoComplete="off"
                            value={this.confirmPassword}
                            onChange={this.changeConfirmPassword}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            block={true}
                            loading={this.performingRestoreRequest}
                            shape={"round"}
                        >
                            <FormattedMessage id="resetPassword.restoreBtn" />
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
export default injectIntl(PasswordRestoreChangePasswordComponent);
