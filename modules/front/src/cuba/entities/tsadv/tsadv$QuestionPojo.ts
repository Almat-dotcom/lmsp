import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
import { AnswerPojo } from "./tsadv$AnswerPojo";
export class QuestionPojo extends BaseUuidEntity {
  static NAME = "tsadv$QuestionPojo";
  text?: string | null;
  answers?: AnswerPojo | null;
  type?: number | null;
}
export type QuestionPojoViewName = "_base" | "_local" | "_minimal";
export type QuestionPojoView<V extends QuestionPojoViewName> = never;
