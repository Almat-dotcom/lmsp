import { AbstractParentEntity } from "./AbstractParentEntity";
import { Interview } from "./tsadv$Interview";
import { RcQuestionnaire } from "./tsadv$RcQuestionnaire";
import { InterviewQuestion } from "./tsadv$InterviewQuestion";
export class InterviewQuestionnaire extends AbstractParentEntity {
  static NAME = "tsadv$InterviewQuestionnaire";
  interview?: Interview | null;
  questionnaire?: RcQuestionnaire | null;
  questions?: InterviewQuestion[] | null;
  totalScore?: any | null;
  totalMaxScore?: any | null;
}
export type InterviewQuestionnaireViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "interviewQuestionnaire.answers"
  | "interviewQuestionnaire.calculate"
  | "interviewQuestionnaire.view"
  | "interviewQuestionnaire.weight";
export type InterviewQuestionnaireView<
  V extends InterviewQuestionnaireViewName
> = V extends "_base"
  ? Pick<InterviewQuestionnaire, "id" | "legacyID">
  : V extends "_local"
  ? Pick<InterviewQuestionnaire, "id" | "legacyID">
  : V extends "_minimal"
  ? Pick<InterviewQuestionnaire, "id">
  : V extends "interviewQuestionnaire.answers"
  ? Pick<
      InterviewQuestionnaire,
      "id" | "legacyID" | "interview" | "questionnaire" | "questions"
    >
  : V extends "interviewQuestionnaire.calculate"
  ? Pick<InterviewQuestionnaire, "id" | "legacyID" | "questions">
  : V extends "interviewQuestionnaire.view"
  ? Pick<
      InterviewQuestionnaire,
      "id" | "legacyID" | "questionnaire" | "questions" | "interview"
    >
  : V extends "interviewQuestionnaire.weight"
  ? Pick<
      InterviewQuestionnaire,
      | "id"
      | "legacyID"
      | "interview"
      | "questionnaire"
      | "totalScore"
      | "totalMaxScore"
      | "questions"
      | "createTs"
    >
  : never;
