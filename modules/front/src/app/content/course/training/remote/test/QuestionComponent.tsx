import React, {CSSProperties} from "react";
import styles from './test.module.css'
import {AnsweredQuestion} from "./TestComponent";
import AnswerComponent from "./answer/AnswerComponent";
import {QuestionType} from "../../../../../../cuba/enums/enums";
import HideSectionComponentHoc from "../../../../../common/hideSection/HideSectionComponentHoc";

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

class QuestionComponent extends React.Component<TestComponentProps & TestComponentHandlers> {

  render() {
    const sectionBody = (<div className={styles["question-block"]}>
      <div className={styles["question-title"]}>{this.props.question.text}</div>
      <div className={styles["question-options"]}>
        <AnswerComponent answers={this.props.question.answers} type={this.props.question.type}
                         addRemoveAnswer={this.props.addRemoveAnswer} questionId={this.props.question.id}/>
      </div>
    </div>);

    const Section = HideSectionComponentHoc(sectionBody);
    return <Section/>;
  }
}

export default QuestionComponent;