import { AbstractGroup } from "./AbstractGroup";
import { Grade } from "./tsadv$Grade";
export class GradeGroup extends AbstractGroup {
  static NAME = "tsadv$GradeGroup";
  list?: Grade[] | null;
  grade?: Grade | null;
}
export type GradeGroupViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "gradeGroup.browse";
export type GradeGroupView<V extends GradeGroupViewName> = V extends "_base"
  ? Pick<GradeGroup, "id" | "grade" | "legacyID">
  : V extends "_local"
  ? Pick<GradeGroup, "id" | "legacyID">
  : V extends "_minimal"
  ? Pick<GradeGroup, "id" | "grade">
  : V extends "gradeGroup.browse"
  ? Pick<GradeGroup, "id" | "legacyID" | "list" | "grade">
  : never;
