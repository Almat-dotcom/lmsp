import React from "react";
import styles from "./style.module.css";
import {injectIntl, WrappedComponentProps} from "react-intl";
import FormItem from "antd/es/form/FormItem";
import Form, {FormComponentProps} from 'antd/lib/form/Form';
import {Button, Input, notification} from "antd";
import {Response, restServices} from "../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";

class PasswordComponent extends React.Component<WrappedComponentProps & FormComponentProps, any> {

  handleSubmit = () => {
    this.props.form!.validateFields(err => {
      if (err === null) {
        console.log(this.props.form.getFieldValue("old"));
        const oldPassword: string = this.props.form.getFieldValue("old").trim();
        const newPassword: string = this.props.form.getFieldValue("new").trim();
        const retryPassword: string = this.props.form.getFieldValue("retry").trim();
        if (newPassword !== retryPassword) {
          notification.error({
            message: this.props.intl.formatMessage({id: "modal.error.title"}),
            description: this.props.intl.formatMessage({id: "password.differentPasswords"}),
            placement: "bottomRight"
          });
          return;
        }
        restServices.tsadv_LmsService.changePassword(getCubaREST()!, {
          newPassword: newPassword,
          oldPassword: oldPassword
        })()
          .then((responseString: string) => {
            const response: Response = JSON.parse(responseString);
            if (response.status === 'SUCCESS') {
              notification.success({
                message: this.props.intl.formatMessage({id: "password.changed"}),
                placement: "bottomRight"
              });
            } else {
              notification.error({
                message: this.props.intl.formatMessage({id: "modal.error.title"}),
                description: response.message,
                placement: "bottomRight"
              });
            }
          })
          .catch((error: string) => {
          })
      }
    });

  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return <div className={styles["password-container"]}>
      <Form onSubmit={this.handleSubmit} autoComplete={"off"}>
        <FormItem required={true} label={"?????????????? ????????????:"} className={styles["title"]}>
          {getFieldDecorator('old', {
            rules: [{
              required: true,
              message: this.props.intl.formatMessage({id: "password.field.old.notFilled"})
            }]
          })(<Input type={"password"} autoComplete={"none"}/>)}
        </FormItem>
        <FormItem required={true} label={"?????????? ????????????:"} className={styles["title"]}>
          {getFieldDecorator('new', {
            rules: [{required: true, message: this.props.intl.formatMessage({id: "password.field.new.notFilled"})}]
          })(<Input type={"password"} autoComplete={"none"}/>)}
        </FormItem>
        <FormItem required={true} label={"?????????????????? ?????? ??????:"} className={styles["title"]}>
          {getFieldDecorator('retry', {
            rules: [{required: true, message: this.props.intl.formatMessage({id: "password.field.retry.notFilled"})}]
          })(<Input type={"password"} autoComplete={"none"}/>)}
        </FormItem>
        <FormItem>
          <Button className={styles["title"]} type="primary" htmlType={"submit"}>
            ????????????????
          </Button>
        </FormItem>
      </Form>
    </div>;
  }
}

export default Form.create()(injectIntl(PasswordComponent));