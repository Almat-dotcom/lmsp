import React from "react";
import {QuestionType} from "../../../../../cuba/enums/enums";
import FeedbackQuestionAnswerComponent, {AnsweredFeedback} from "./FeedbackQuestionAnswerComponent";
import styles from "../remote/test/test.module.css";
import {Button, Icon, Modal} from "antd";
import {FormattedMessage, injectIntl, WrappedComponentProps} from "react-intl";
import {restServices} from "../../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";
import {AnsweredQuestion, FinishTestResponse} from "../remote/test/TestComponent";
import {action, observable} from "mobx";

export interface FeedbackComponentProps {
  courseId: string
  templateId: string
  feedbacks: FeedbackCourse[] | null
}

export interface FeedbackComponentProps {
  okFinishFeedbackHandler?: () => void
}

export type FeedbackCourse = {
  id: string,
  questionLangValue1: string,
  questionType: QuestionType,
  answers?: FeedbackAnswer[]
}

export type FeedbackAnswer = {
  id: string,
  answerLangValue1: string,
}

class FeedbackComponent extends React.Component<FeedbackComponentProps & WrappedComponentProps> {

  @observable performingFinishRequest = false;

  feedbackContainerRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

  answeredFeedback: AnsweredFeedback = {
    courseId: this.props.courseId,
    templateId: this.props.templateId,
    questionsAndAnswers: []
  };

  addRemoveAnswer = (a: AnsweredQuestion) => {
    for (let i = this.answeredFeedback.questionsAndAnswers!.length - 1; i > -1; i--) {
      if (this.answeredFeedback.questionsAndAnswers![i].questionId === a.questionId) {
        this.answeredFeedback.questionsAndAnswers!.splice(i, 1);
      }
    }
    this.answeredFeedback.questionsAndAnswers!.push(a);
  };


  @action setPerformingFinishRequest = (value: boolean) => {
    this.performingFinishRequest = value;
  };

  submitFeedback = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {okFinishFeedbackHandler} = this.props;

    this.setPerformingFinishRequest(true);
    restServices.tsadv_LmsService.finishFeedback(getCubaREST()!, {answeredFeedback: this.answeredFeedback})().then((response: string) => {
      Modal.success({
        title: this.props.intl.formatMessage({id: "feedback.modal.title"}),
        okText: this.props.intl.formatMessage({id: "cubaReact.dataTable.ok"}),
        onOk: () => {
          if (okFinishFeedbackHandler) {
            okFinishFeedbackHandler();
          }
        }
      });
    }).finally(() => this.setPerformingFinishRequest(false));
  };

  render() {
    const {feedbacks} = this.props;
    if (feedbacks === null) {
      return <></>
    }

    return <div ref={this.feedbackContainerRef} className={styles["feedback-container"]}>
      {this.props.feedbacks ? this.props.feedbacks.map(f => {
        return <FeedbackQuestionAnswerComponent feedback={f} addRemoveAnswer={this.addRemoveAnswer}/>
      }) : <></>}
      <Button
        type="primary"
        htmlType="submit"
        size="large"
        onClick={this.submitFeedback}
        loading={this.performingFinishRequest}
      >
        <FormattedMessage id="test.button.submit"/>
      </Button>
    </div>;
  }
}

export default injectIntl(FeedbackComponent);