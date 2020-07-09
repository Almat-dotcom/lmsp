import {AbstractParentEntity} from "../base/uco/AbstractParentEntity";
import {Course} from "./tsadv$Course";
import {LearningObject} from "./tsadv$LearningObject";

export class CourseSectionObject extends AbstractParentEntity {
  static NAME = "tsadv$CourseSection";
  objectType?: any | null = null;
  content?: LearningObject | null = null;
  test?: any | null = null;
}

export type CourseSectionObjectViewName = "_base" | "_local" | "_minimal";
// export type CourseSectionView<V extends CourseSectionObjectViewName> = V extends "_base"
//   ? Pick<Course,
//     | "id"
//     | "name"
//     | "description"
//     | "logo"
//     | "targetAudience"
//     | "activeFlag"
//     | "shortDescription"
//     | "selfEnrollment"
//     | "legacyID">
//   : V extends "_local"
//     ? Pick<Course,
//       | "id"
//       | "name"
//       | "description"
//       | "logo"
//       | "targetAudience"
//       | "activeFlag"
//       | "shortDescription"
//       | "selfEnrollment"
//       | "legacyID">
//     : V extends "_minimal"
//       ? Pick<Course, "id" | "name">
//       : never;
