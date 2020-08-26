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
      <Form onSubmit={this.handleSubmit}>
        <FormItem required={true} label={"Текущий пароль:"} className={styles["title"]}>
          {getFieldDecorator('old', {
            rules: [{
              required: true,
              message: this.props.intl.formatMessage({id: "password.field.old.notFilled"})
            }]
          })(<Input/>)}
        </FormItem>
        <FormItem required={true} label={"Новый пароль:"} className={styles["title"]}>
          {getFieldDecorator('new', {
            rules: [{required: true, message: this.props.intl.formatMessage({id: "password.field.new.notFilled"})}]
          })(<Input/>)}
        </FormItem>
        <FormItem required={true} label={"Повторите ещё раз:"} className={styles["title"]}>
          {getFieldDecorator('retry', {
            rules: [{required: true, message: this.props.intl.formatMessage({id: "password.field.retry.notFilled"})}]
          })(<Input/>)}
        </FormItem>
        <FormItem>
          <Button className={styles["title"]} type="primary" htmlType={"submit"}>
            Изменить
          </Button>
        </FormItem>
      </Form>
    </div>;
  }
}

export default Form.create()(injectIntl(PasswordComponent));