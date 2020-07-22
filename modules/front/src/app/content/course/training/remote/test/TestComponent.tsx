import React, {CSSProperties} from "react";
import LoadingComponent from "../../../../../common/loading/LoadingComponent";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import QuestionComponent, {Question} from "./QuestionComponent";
import {Button, Modal} from "antd";
import {FormattedMessage, injectIntl, WrappedComponentProps} from "react-intl";
import {Statistic} from 'antd'
import {restServices} from "../../../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";
import {TestComponentHandlers} from "./TestDsComponent";

export interface TestComponentProps {
  test: Test,
  hideButtonStyle?: CSSProperties
}

export type Test = {
  attemptId: string,
  timer: number,
  questionsAndAnswers: Question[]
}

export interface AnsweredTest {
  attemptId: string
  questionsAndAnswers?: AttemptQuestion[]
}

export interface AttemptQuestion {
  questionId: string,
  answerId: string
}

export interface FinishTestResponse {
  score: number,
  maxScore: number
}

@observer
class TestComponent extends React.Component<TestComponentProps & TestComponentHandlers & WrappedComponentProps> {

  @observable performingFinishRequest = false;

  answeredTest: AnsweredTest = {attemptId: this.props.test.attemptId, questionsAndAnswers: []};

  @action setPerformingFinishRequest = (value: boolean) => {
    this.performingFinishRequest = value;
  };

  addRemoveAnswer = (a: AttemptQuestion) => {
    for (let i = this.answeredTest.questionsAndAnswers!.length - 1; i > -1; i--) {
      if (this.answeredTest.questionsAndAnswers![i].questionId === a.questionId) {
        this.answeredTest.questionsAndAnswers!.splice(i, 1);
      }
    }
    this.answeredTest.questionsAndAnswers!.push(a);
  };

  submitTest = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {okFinishTestHandler} = this.props;
    Modal.confirm({
      title: this.props.intl.formatMessage({id: "test.modal.title"}),
      okText: this.props.intl.formatMessage({id: "knowledge.courses.modal.ok"}),
      cancelText: this.props.intl.formatMessage({id: "knowledge.courses.modal.cancel"}),
      onOk: () => {
        this.setPerformingFinishRequest(true);
        restServices.tsadv_LmsService.finishTest(getCubaREST()!, {answeredTest: this.answeredTest})().then((response: string) => {
          const result: FinishTestResponse = JSON.parse(response);

          const percentage: number = (result.score * 100) / result.maxScore;
          Modal.info({
            title: this.props.intl.formatMessage({id: "test.result"}, {
              score: result.score,
              maxScore: result.maxScore,
              percentage: percentage,
            }),
            okText: this.props.intl.formatMessage({id: "knowledge.courses.modal.ok"}),
            onOk: () => {
              if (okFinishTestHandler) {
                okFinishTestHandler();
              }
            }
          });
        }).finally(() => this.setPerformingFinishRequest(false))
      }
    });
  };

  render() {
    const {test} = this.props;
    const {Countdown} = Statistic;

    return test == null ? <LoadingComponent/> : <>
      <Countdown value={Date.now() + 1000 * 60 * this.props.test.timer} onFinish={this.props.finishTimeHandler}/>
      {test.questionsAndAnswers.map(el => {
        return <><QuestionComponent hideButtonStyle={this.props.hideButtonStyle}
                                    addRemoveAnswer={this.addRemoveAnswer}
                                    question={el}/></>
      })}
      <Button
        type="primary"
        htmlType="submit"
        size="large"
        loading={this.performingFinishRequest}
        onClick={this.submitTest}
      >
        <FormattedMessage id="test.button.submit"/>
      </Button>
    </>
  }
}

export default injectIntl(TestComponent);