import { AbstractDictionary } from "./AbstractDictionary";
export class DicLearningFeedbackQuestionType extends AbstractDictionary {
  static NAME = "tsadv$DicLearningFeedbackQuestionType";
}
export type DicLearningFeedbackQuestionTypeViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type DicLearningFeedbackQuestionTypeView<
  V extends DicLearningFeedbackQuestionTypeViewName
> = V extends "_base"
  ? Pick<
      DicLearningFeedbackQuestionType,
      | "id"
      | "langValue"
      | "legacyID"
      | "langValue1"
      | "description1"
      | "langValue2"
      | "description2"
      | "langValue3"
      | "description3"
      | "langValue4"
      | "description4"
      | "langValue5"
      | "description5"
      | "startDate"
      | "endDate"
      | "code"
      | "isSystemRecord"
      | "active"
      | "order"
      | "description"
    >
  : V extends "_local"
  ? Pick<
      DicLearningFeedbackQuestionType,
      | "id"
      | "legacyID"
      | "langValue1"
      | "description1"
      | "langValue2"
      | "description2"
      | "langValue3"
      | "description3"
      | "langValue4"
      | "description4"
      | "langValue5"
      | "description5"
      | "startDate"
      | "endDate"
      | "code"
      | "isSystemRecord"
      | "active"
      | "order"
      | "langValue"
      | "description"
    >
  : V extends "_minimal"
  ? Pick<DicLearningFeedbackQuestionType, "id" | "langValue">
  : never;
