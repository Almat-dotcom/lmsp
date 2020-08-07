import React, {CSSProperties} from "react";
import LoadingComponent from "../../../../../common/loading/LoadingComponent";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import {Question} from "./QuestionComponent";
import {Button, Icon, Modal} from "antd";
import {FormattedMessage, injectIntl, WrappedComponentProps} from "react-intl";
import {Statistic} from 'antd'
import {restServices} from "../../../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";
import {TestComponentHandlers} from "./TestDsComponent";
import TestSectionComponent from "./section/TestSectionComponent";
import styles from './test.module.css'

export interface TestComponentProps {
  test: Test,
  hideButtonStyle?: CSSProperties
}

export type Test = {
  attemptId: string,
  timer: number,
  testSections: TestSection[]
}

export interface TestSection {
  id: string,
  name: string,
  questionsAndAnswers: Question[]
}

export interface AnsweredTest {
  attemptId: string
  questionsAndAnswers: AnsweredQuestion[],
}

export interface AnsweredQuestion {
  questionId: string,
  answer: string[]
}

export interface FinishTestResponse {
  score: number,
  maxScore: number
}

@observer
class TestComponent extends React.Component<TestComponentProps & TestComponentHandlers & WrappedComponentProps> {

  @observable performingFinishRequest = false;

  visibleResultModal = false;

  resultMessage: string = "";

  testContainerRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

  answeredTest: AnsweredTest = {attemptId: this.props.test.attemptId, questionsAndAnswers: []};

  @action setPerformingFinishRequest = (value: boolean) => {
    this.performingFinishRequest = value;
  };


  addRemoveAnswer = (a: AnsweredQuestion) => {
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
          this.resultMessage = this.props.intl.formatMessage({id: "test.result"}, {
            score: result.score,
            maxScore: result.maxScore,
            percentage: percentage,
          });
          this.visibleResultModal = true;
          // Modal.info({
          //     title: this.props.intl.formatMessage({id: "test.result"}, {
          //       score: result.score,
          //       maxScore: result.maxScore,
          //       percentage: percentage,
          //     }),
          //     okText: this.props.intl.formatMessage({id: "knowledge.courses.modal.ok"}),
          //     onOk: () => {
          //       if (okFinishTestHandler) {
          //         okFinishTestHandler();
          //       }
          //     }
          //   });
        }).finally(() => this.setPerformingFinishRequest(false))
      }
    });
  };

  render() {
    const {test} = this.props;
    const {Countdown} = Statistic;
    const timer = Date.now() + 1000 * 60 * this.props.test.timer;

    return test == null ? <LoadingComponent/> : <div ref={this.testContainerRef} className={styles["test-container"]}>
      <div className={styles["time-block"]}>
        <span className={styles["time-title"]}>{this.props.intl.formatMessage({id: 'test.time'})}: </span>
        <Countdown value={timer} onFinish={this.props.finishTimeHandler}/>
      </div>
      {test.testSections.map(testSection => <><TestSectionComponent hideButtonStyle={this.props.hideButtonStyle}
                                                                    addRemoveAnswer={this.addRemoveAnswer}
                                                                    testSection={testSection}/></>)}
      <Button
        type="primary"
        htmlType="submit"
        size="large"
        loading={this.performingFinishRequest}
        onClick={this.submitTest}
      >
        <FormattedMessage id="test.button.submit"/>
      </Button>
      <Modal
        visible={this.visibleResultModal}
        closable={false}
        width={400}
        footer={[
          <div style={{width: '30%', margin: '0 auto'}}><Button
            block
            type={"primary"}
            onClick={() => {
              if (this.props.okFinishTestHandler) {
                this.props.okFinishTestHandler();
              }
              this.visibleResultModal = false
            }}>{this.props.intl.formatMessage({id: "cubaReact.dataTable.ok"})}</Button></div>]}>
        <div className="ant-modal-confirm-body">
          <Icon type={"info-circle"} theme={"twoTone"}/>
          <span className="ant-modal-confirm-title">{this.resultMessage}</span>
        </div>
      </Modal>
    </div>
  }
}

export default injectIntl(TestComponent);