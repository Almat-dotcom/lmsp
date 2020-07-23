import React, {CSSProperties} from "react";
import styles from './test.module.css'
import {Radio} from "antd";
import {observer} from "mobx-react";
import {action, observable} from "mobx";
import MinusSvgComponent from "./MinusSvgComponent";
import PlusSvgComponent from "../PlusSvgComponent";
import {RadioChangeEvent} from "antd/es/radio";
import {AttemptQuestion} from "./TestComponent";

export type Question = {
  id: string,
  text: string,
  answers: Answer[]
}

export type Answer = {
  id: string,
  text: string
}

export interface TestComponentProps {
  question: Question,
  hideButtonStyle?: CSSProperties
}

export interface TestComponentHandlers {
  addRemoveAnswer: (a: AttemptQuestion) => void
}

@observer
class QuestionComponent extends React.Component<TestComponentProps & TestComponentHandlers> {

  @observable isHide: boolean = false;

  showHideOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    this.setIsHide(!this.isHide)
  };

  answerChangeHandler = (e: RadioChangeEvent) => {
    this.props.addRemoveAnswer({questionId: this.props.question.id, answerId: e.target.value} as AttemptQuestion);
  };

  @action setIsHide = (value: boolean) => {
    this.isHide = value;
  };

  render() {
    const questionContainerClass = styles["question-container"] + " " + (this.isHide ? styles["hidden"] : "");
    return <div className={styles["question-block"]}>
      <div style={this.props.hideButtonStyle} className={styles["hide-button-group"]} onClick={this.showHideOnClick}>
        {this.isHide ? <>
          <PlusSvgComponent/>
          <span>Развернуть</span></> : <>
          <MinusSvgComponent/>
          <span>Скрыть</span></>}
      </div>
      <div className={questionContainerClass}>
        <div className={styles["question-title"]}>{this.props.question.text}</div>
        <div className={styles["question-options"]}>
          <Radio.Group onChange={this.answerChangeHandler}>
            {this.props.question.answers.map(el => {
              return <Radio value={el.id}
                            style={{display: "block", wordWrap: "break-word", whiteSpace: "normal"}}>{el.text}</Radio>
            })}
          </Radio.Group>
        </div>
      </div>
    </div>
  }
}

export default QuestionComponent;