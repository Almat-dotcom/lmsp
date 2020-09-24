import { AbstractParentEntity } from "./AbstractParentEntity";
import { UserExt } from "./base$UserExt";
import { PersonGroupExt } from "./base$PersonGroupExt";
export class UserExtPersonGroup extends AbstractParentEntity {
  static NAME = "tsadv$UserExtPersonGroup";
  userExt?: UserExt | null;
  personGroup?: PersonGroupExt | null;
  fullName?: string | null;
}
export type UserExtPersonGroupViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "userExtPersonGroup-for-jobRequest"
  | "userExtPersonGroup.edit";
export type UserExtPersonGroupView<
  V extends UserExtPersonGroupViewName
> = V extends "_base"
  ? Pick<UserExtPersonGroup, "id" | "fullName" | "legacyID">
  : V extends "_local"
  ? Pick<UserExtPersonGroup, "id" | "fullName" | "legacyID">
  : V extends "userExtPersonGroup-for-jobRequest"
  ? Pick<
      UserExtPersonGroup,
      "id" | "fullName" | "legacyID" | "userExt" | "personGroup"
    >
  : V extends "userExtPersonGroup.edit"
  ? Pick<
      UserExtPersonGroup,
      "id" | "fullName" | "legacyID" | "userExt" | "personGroup" | "fullName"
    >
  : never;
