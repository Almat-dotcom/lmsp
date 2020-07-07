import { AbstractParentEntity } from "../base/uco/AbstractParentEntity";
export class Course extends AbstractParentEntity {
  static NAME = "tsadv$Course";
  name?: string | null;
  feedbackTemplates?: any | null;
  party?: any | null;
  description?: string | null;
  logo?: any | null;
  category?: any | null;
  targetAudience?: string | null;
  activeFlag?: boolean | null;
  sections?: any | null;
  shortDescription?: string | null;
  competences?: any | null;
  preRequisition?: any | null;
  avgRate?: any | null;
  selfEnrollment?: boolean | null;
  completed?: boolean | null;
  learningType?: any | null;
}
export type CourseViewName = "_base" | "_local" | "_minimal";
export type CourseView<V extends CourseViewName> = V extends "_base"
  ? Pick<
      Course,
      | "id"
      | "name"
      | "description"
      | "logo"
      | "targetAudience"
      | "activeFlag"
      | "shortDescription"
      | "selfEnrollment"
      | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      Course,
      | "id"
      | "name"
      | "description"
      | "logo"
      | "targetAudience"
      | "activeFlag"
      | "shortDescription"
      | "selfEnrollment"
      | "legacyID"
    >
  : V extends "_minimal"
  ? Pick<Course, "id" | "name">
  : never;
