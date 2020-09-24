import { AbstractParentEntity } from "./AbstractParentEntity";
import { PersonAction } from "./tsadv$PersonAction";
import { PersonGroupExt } from "./base$PersonGroupExt";
export class PersonActionComment extends AbstractParentEntity {
  static NAME = "tsadv$PersonActionComment";
  action?: PersonAction | null;
  comment?: string | null;
  parentComment?: PersonActionComment | null;
  personGroup?: PersonGroupExt | null;
}
export type PersonActionCommentViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "personActionComment-view"
  | "personActionComment.edit";
export type PersonActionCommentView<
  V extends PersonActionCommentViewName
> = V extends "_base"
  ? Pick<PersonActionComment, "id" | "comment" | "legacyID">
  : V extends "_local"
  ? Pick<PersonActionComment, "id" | "comment" | "legacyID">
  : V extends "personActionComment-view"
  ? Pick<
      PersonActionComment,
      "id" | "comment" | "legacyID" | "action" | "parentComment" | "personGroup"
    >
  : V extends "personActionComment.edit"
  ? Pick<
      PersonActionComment,
      | "id"
      | "comment"
      | "legacyID"
      | "action"
      | "parentComment"
      | "personGroup"
      | "createTs"
    >
  : never;
