import {AbstractParentEntity} from "../base/uco/AbstractParentEntity";
import {Course} from "./tsadv$Course";
import {CourseSectionObject} from "./tsadv$CourseSectionObject";

export class CourseSection extends AbstractParentEntity {
  static NAME = "tsadv$CourseSection";
  course?: Course | null;
  mandatory?: boolean | null;
  sectionName?: string | null;
  order?: number | null;
  sectionObject?: CourseSectionObject | null;
  format?: any | null;
  description?: string | null;
  session?: any | null;
  courseSectionAttempts?: any | null;
}

export type CourseSectionViewName = "_base" | "_local" | "_minimal";
export type CourseSectionView<V extends CourseSectionViewName> = V extends "_base"
  ? Pick<Course,
    | "id"
    | "name"
    | "description"
    | "logo"
    | "targetAudience"
    | "activeFlag"
    | "shortDescription"
    | "selfEnrollment"
    | "legacyID">
  : V extends "_local"
    ? Pick<Course,
      | "id"
      | "name"
      | "description"
      | "logo"
      | "targetAudience"
      | "activeFlag"
      | "shortDescription"
      | "selfEnrollment"
      | "legacyID">
    : V extends "_minimal"
      ? Pick<Course, "id" | "name">
      : never;
