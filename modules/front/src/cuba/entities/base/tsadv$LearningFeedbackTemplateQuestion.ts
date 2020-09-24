import { AbstractParentEntity } from "./AbstractParentEntity";
import { LearningFeedbackTemplate } from "./tsadv$LearningFeedbackTemplate";
import { LearningFeedbackQuestion } from "./tsadv$LearningFeedbackQuestion";
export class LearningFeedbackTemplateQuestion extends AbstractParentEntity {
  static NAME = "tsadv$LearningFeedbackTemplateQuestion";
  feedbackTemplate?: LearningFeedbackTemplate | null;
  feedbackQuestion?: LearningFeedbackQuestion | null;
  order?: number | null;
}
export type LearningFeedbackTemplateQuestionViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "learningFeedbackTemplateQuestion.edit";
export type LearningFeedbackTemplateQuestionView<
  V extends LearningFeedbackTemplateQuestionViewName
> = V extends "_base"
  ? Pick<LearningFeedbackTemplateQuestion, "id" | "order" | "legacyID">
  : V extends "_local"
  ? Pick<LearningFeedbackTemplateQuestion, "id" | "order" | "legacyID">
  : V extends "learningFeedbackTemplateQuestion.edit"
  ? Pick<
      LearningFeedbackTemplateQuestion,
      "id" | "order" | "legacyID" | "feedbackQuestion" | "feedbackTemplate"
    >
  : never;
