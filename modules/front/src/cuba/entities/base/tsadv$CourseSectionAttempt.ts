import { AbstractParentEntity } from "./AbstractParentEntity";
import { Test } from "./tsadv$Test";
import { Enrollment } from "./tsadv$Enrollment";
import { CourseSection } from "./tsadv$CourseSection";
import { CourseSectionSession } from "./tsadv$CourseSectionSession";
export class CourseSectionAttempt extends AbstractParentEntity {
  static NAME = "tsadv$CourseSectionAttempt";
  attemptDate?: any | null;
  test?: Test | null;
  testResult?: number | null;
  testResultPercent?: number | null;
  timeSpent?: any | null;
  activeAttempt?: boolean | null;
  success?: boolean | null;
  enrollment?: Enrollment | null;
  courseSection?: CourseSection | null;
  courseSectionSession?: CourseSectionSession | null;
  courseSectionFormat?: string | null;
}
export type CourseSectionAttemptViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "courseSectionAttempt.browse"
  | "courseSectionAttempt.course.schedule"
  | "courseSectionAttempt.edit"
  | "courseSectionAttempt.for.check.on.remove"
  | "courseSectionAttempt.for.result"
  | "courseSectionAttempt.lms.test.finish";
export type CourseSectionAttemptView<
  V extends CourseSectionAttemptViewName
> = V extends "_base"
  ? Pick<
      CourseSectionAttempt,
      | "id"
      | "courseSection"
      | "attemptDate"
      | "testResult"
      | "testResultPercent"
      | "timeSpent"
      | "activeAttempt"
      | "success"
      | "courseSectionFormat"
      | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      CourseSectionAttempt,
      | "id"
      | "attemptDate"
      | "testResult"
      | "testResultPercent"
      | "timeSpent"
      | "activeAttempt"
      | "success"
      | "courseSectionFormat"
      | "legacyID"
    >
  : V extends "_minimal"
  ? Pick<CourseSectionAttempt, "id" | "courseSection">
  : V extends "courseSectionAttempt.browse"
  ? Pick<
      CourseSectionAttempt,
      | "id"
      | "attemptDate"
      | "success"
      | "enrollment"
      | "courseSection"
      | "courseSectionFormat"
      | "activeAttempt"
      | "test"
      | "testResult"
      | "testResultPercent"
      | "timeSpent"
    >
  : V extends "courseSectionAttempt.course.schedule"
  ? Pick<
      CourseSectionAttempt,
      "id" | "enrollment" | "courseSection" | "courseSectionSession"
    >
  : V extends "courseSectionAttempt.edit"
  ? Pick<
      CourseSectionAttempt,
      | "id"
      | "attemptDate"
      | "success"
      | "enrollment"
      | "courseSection"
      | "courseSectionFormat"
      | "activeAttempt"
      | "createTs"
      | "test"
      | "testResult"
      | "timeSpent"
    >
  : V extends "courseSectionAttempt.for.check.on.remove"
  ? Pick<CourseSectionAttempt, "id" | "courseSection" | "enrollment">
  : V extends "courseSectionAttempt.for.result"
  ? Pick<
      CourseSectionAttempt,
      | "id"
      | "courseSection"
      | "enrollment"
      | "testResult"
      | "courseSection"
      | "success"
    >
  : V extends "courseSectionAttempt.lms.test.finish"
  ? Pick<
      CourseSectionAttempt,
      | "id"
      | "attemptDate"
      | "testResult"
      | "testResultPercent"
      | "timeSpent"
      | "activeAttempt"
      | "success"
      | "courseSectionFormat"
      | "legacyID"
      | "test"
      | "enrollment"
    >
  : never;
