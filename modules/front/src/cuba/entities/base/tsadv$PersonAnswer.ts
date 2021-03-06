import { AbstractParentEntity } from "./AbstractParentEntity";
import { TestSection } from "./tsadv$TestSection";
import { Question } from "./tsadv$Question";
import { CourseSectionAttempt } from "./tsadv$CourseSectionAttempt";
export class PersonAnswer extends AbstractParentEntity {
  static NAME = "tsadv$PersonAnswer";
  testSection?: TestSection | null;
  correct?: boolean | null;
  answered?: boolean | null;
  score?: number | null;
  question?: Question | null;
  attempt?: CourseSectionAttempt | null;
  answer?: string | null;
}
export type PersonAnswerViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "personAnswer-view";
export type PersonAnswerView<V extends PersonAnswerViewName> = V extends "_base"
  ? Pick<
      PersonAnswer,
      "id" | "correct" | "answered" | "score" | "answer" | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      PersonAnswer,
      "id" | "correct" | "answered" | "score" | "answer" | "legacyID"
    >
  : V extends "personAnswer-view"
  ? Pick<PersonAnswer, "id" | "answer" | "question" | "attempt" | "answered">
  : never;
