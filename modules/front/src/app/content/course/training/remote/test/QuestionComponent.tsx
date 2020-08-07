import React, {CSSProperties} from "react";
import styles from './test.module.css'
import {Radio} from "antd";
import {observer} from "mobx-react";
import {action, observable} from "mobx";
import MinusSvgComponent from "./MinusSvgComponent";
import PlusSvgComponent from "../PlusSvgComponent";
import {RadioChangeEvent} from "antd/es/radio";
import {AnsweredQuestion} from "./TestComponent";
import AnswerComponent from "./answer/AnswerComponent";
import {QuestionType} from "../../../../../../cuba/enums/enums";

export type Question = {
  id: string,
  text: string,
  type: QuestionType,
  answers: Answer[]
}

export type Answer = {
  id: string,
  text: string
}

export interface TestComponentProps {
  question: Question,
  testSectionId: string,
  hideButtonStyle?: CSSProperties
}

export interface TestComponentHandlers {
  addRemoveAnswer: (a: AnsweredQuestion) => void
}

@observer
class QuestionComponent extends React.Component<TestComponentProps & TestComponentHandlers> {

  @observable isHide: boolean = false;

  showHideOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    this.setIsHide(!this.isHide)
  };

  @action setIsHide = (value: boolean) => {
    this.isHide = value;
  };

  render() {
    console.log();

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
          <AnswerComponent answers={this.props.question.answers} type={this.props.question.type}
                           addRemoveAnswer={this.props.addRemoveAnswer} questionId={this.props.question.id}
                           testSectionId={this.props.testSectionId}/>
        </div>
      </div>
    </div>
  }
}

export default QuestionComponent;