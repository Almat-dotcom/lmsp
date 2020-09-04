import * as React from "react";
import styles from "../remote/test/test.module.css";
import {FeedbackCourse} from "./FeedbackComponent";
import HideSectionComponentHoc from "../../../../common/hideSection/HideSectionComponentHoc";
import AnswerComponent from "../remote/test/answer/AnswerComponent";
import {AnsweredQuestion, AnsweredTest} from "../remote/test/TestComponent";

interface FeedbackQuestionAnswerComponentProps {
  feedback: FeedbackCourse
}

interface FeedbackQuestionAnswerComponentHandls {
  addRemoveAnswer: (a: AnsweredQuestion) => void
}

export type AnsweredFeedback = {
  templateId: string,
  courseId: string,
  questionsAndAnswers: AnsweredQuestion[],
}

class FeedbackQuestionAnswerComponent extends React.Component<FeedbackQuestionAnswerComponentProps & FeedbackQuestionAnswerComponentHandls> {

  render() {
    const answers = this.props.feedback.answers ? this.props.feedback.answers.map(a => {
        return {
          id: a.id,
          text: a.answerLangValue1
        }
      }
    ) : this.props.feedback.answers;

    const feedbackBody = (<div className={styles["question-block"]}>
      <div className={styles["question-title"]}>{this.props.feedback.questionLangValue1}</div>
      <div className={styles["question-options"]}>
        <AnswerComponent answers={answers} type={this.props.feedback.questionType}
                         addRemoveAnswer={this.props.addRemoveAnswer} questionId={this.props.feedback.id}/>
      </div>
    </div>);

    const hideSectionProps = {hideButtonStyle: {backgroundColor: '#fff'}};
    const Feedback = HideSectionComponentHoc(feedbackBody, hideSectionProps);
    return <Feedback/>;
  }
}

export default FeedbackQuestionAnswerComponent;