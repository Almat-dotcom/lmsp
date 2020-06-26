import { StandardEntity } from "../base/sys$StandardEntity";
import { RcgQuestion } from "./tsadv$RcgQuestion";
import { RcgQuestionAnswer } from "./tsadv$RcgQuestionAnswer";
export class PersonQuestionAnswer extends StandardEntity {
  static NAME = "tsadv$PersonQuestionAnswer";
  personGroup?: any | null;
  question?: RcgQuestion | null;
  answer?: RcgQuestionAnswer | null;
  date?: any | null;
}
export type PersonQuestionAnswerViewName = "_base" | "_local" | "_minimal";
export type PersonQuestionAnswerView<
  V extends PersonQuestionAnswerViewName
> = V extends "_base"
  ? Pick<PersonQuestionAnswer, "id" | "date">
  : V extends "_local"
  ? Pick<PersonQuestionAnswer, "id" | "date">
  : never;
