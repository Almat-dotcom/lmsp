import { AbstractParentEntity } from "./AbstractParentEntity";
import { LearningFeedbackTemplate } from "./tsadv$LearningFeedbackTemplate";
import { Course } from "./tsadv$Course";
export class CourseFeedbackTemplate extends AbstractParentEntity {
  static NAME = "tsadv$CourseFeedbackTemplate";
  feedbackTemplate?: LearningFeedbackTemplate | null;
  course?: Course | null;
  startDate?: any | null;
  endDate?: any | null;
}
export type CourseFeedbackTemplateViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "courseFeedbackTemplate.course"
  | "courseFeedbackTemplate.edit";
export type CourseFeedbackTemplateView<
  V extends CourseFeedbackTemplateViewName
> = V extends "_base"
  ? Pick<CourseFeedbackTemplate, "id" | "startDate" | "endDate" | "legacyID">
  : V extends "_local"
  ? Pick<CourseFeedbackTemplate, "id" | "startDate" | "endDate" | "legacyID">
  : V extends "courseFeedbackTemplate.course"
  ? Pick<
      CourseFeedbackTemplate,
      "id" | "startDate" | "endDate" | "legacyID" | "feedbackTemplate"
    >
  : V extends "courseFeedbackTemplate.edit"
  ? Pick<
      CourseFeedbackTemplate,
      | "id"
      | "startDate"
      | "endDate"
      | "legacyID"
      | "feedbackTemplate"
      | "course"
    >
  : never;
