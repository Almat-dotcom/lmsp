import React, {ReactElement} from "react";
import {Answer} from "../QuestionComponent";
import {QuestionType} from "../../../../../../../cuba/enums/enums";
import {Checkbox, Input, InputNumber, Radio} from "antd";
import {RadioChangeEvent} from "antd/es/radio";
import {AnsweredQuestion} from "../TestComponent";
import CheckboxGroup, {CheckboxValueType} from "antd/es/checkbox/Group";

export interface AnswerComponentProps {
  answers?: Answer[],
  type: QuestionType,
  questionId: string
}

export interface AnswerComponentHandlers {
  addRemoveAnswer: (a: AnsweredQuestion) => void
}

class AnswerComponent extends React.Component<AnswerComponentProps & AnswerComponentHandlers> {

  answerChangeHandler = (e: RadioChangeEvent | React.FocusEvent<HTMLInputElement>) => {
    this.props.addRemoveAnswer({
      questionId: this.props.questionId,
      answer: [e.target.value]
    } as AnsweredQuestion);
  };

  answerCheckboxChangeHandler = (checkedValues: CheckboxValueType[]) => {
    this.props.addRemoveAnswer({
      questionId: this.props.questionId,
      answer: checkedValues
    } as AnsweredQuestion);
  };
  getAnswerComponentByType: React.FC<any> = (type: QuestionType): ReactElement => {
    switch (type) {
      case QuestionType.ONE: {
        return <Radio.Group onChange={this.answerChangeHandler}>
          {this.props.answers!.map(el => {
            return <Radio value={el.id}
                          style={{display: "block", wordWrap: "break-word", whiteSpace: "normal"}}>{el.text}</Radio>
          })}
        </Radio.Group>;
      }
      case QuestionType.MANY: {
        return <CheckboxGroup onChange={this.answerCheckboxChangeHandler}>
          {this.props.answers!.map(el => {
            return <Checkbox value={el.id}
                             style={{
                               display: "block",
                               wordWrap: "break-word",
                               whiteSpace: "normal",
                               marginLeft: '0'
                             }}>{el.text}</Checkbox>
          })}
        </CheckboxGroup>
      }
      case QuestionType.TEXT: {
        return <Input onBlur={this.answerChangeHandler}/>
      }
      case QuestionType.NUM: {
        return <Input type={"number"} onBlur={this.answerChangeHandler}/>
      }
    }
    return <></>
  };

  render() {
    const {type} = this.props;
    return this.getAnswerComponentByType(type);
  }
}

export default AnswerComponent;