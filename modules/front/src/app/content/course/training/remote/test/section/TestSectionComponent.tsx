import React, {CSSProperties} from "react";
import QuestionComponent from "../QuestionComponent";
import {AnsweredQuestion, TestSection} from "../TestComponent";
import styles from './styles.module.css';

export interface TestSectionProps {
  hideButtonStyle?: CSSProperties,
  testSection: TestSection
}

export interface TestSectionHandlers {
  addRemoveAnswer: (a: AnsweredQuestion) => void
}

class TestSectionComponent extends React.Component<TestSectionProps & TestSectionHandlers> {
  render() {
    const {testSection, hideButtonStyle, addRemoveAnswer} = this.props;

    return <div className={styles["test-section"]}>
      <div className={styles["test-section-title"]}>
        <span>{testSection.name}</span>
      </div>
      {testSection.questionsAndAnswers.map(question => <><QuestionComponent
        testSectionId={testSection.id}
        hideButtonStyle={hideButtonStyle}
        addRemoveAnswer={addRemoveAnswer}
        question={question}/></>)}
    </div>;
  }
}

export default TestSectionComponent;