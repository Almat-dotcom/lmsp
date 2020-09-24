import { AbstractParentEntity } from "./AbstractParentEntity";
import { Question } from "./tsadv$Question";
export class Answer extends AbstractParentEntity {
  static NAME = "tsadv$Answer";
  answer?: string | null;
  correct?: boolean | null;
  question?: Question | null;
}
export type AnswerViewName = "_base" | "_local" | "_minimal" | "answer.edit";
export type AnswerView<V extends AnswerViewName> = V extends "_base"
  ? Pick<Answer, "id" | "answer" | "correct" | "legacyID">
  : V extends "_local"
  ? Pick<Answer, "id" | "answer" | "correct" | "legacyID">
  : V extends "answer.edit"
  ? Pick<Answer, "id" | "answer" | "correct">
  : never;
