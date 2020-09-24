import { AbstractParentEntity } from "./AbstractParentEntity";
import { DicHrRole } from "./tsadv$DicHrRole";
import { UserExt } from "./base$UserExt";
export class HrUserRole extends AbstractParentEntity {
  static NAME = "tsadv$HrUserRole";
  role?: DicHrRole | null;
  user?: UserExt | null;
  dateFrom?: any | null;
  dateTo?: any | null;
}
export type HrUserRoleViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "hrUserRole.view";
export type HrUserRoleView<V extends HrUserRoleViewName> = V extends "_base"
  ? Pick<HrUserRole, "id" | "dateFrom" | "dateTo" | "legacyID">
  : V extends "_local"
  ? Pick<HrUserRole, "id" | "dateFrom" | "dateTo" | "legacyID">
  : V extends "_minimal"
  ? Pick<HrUserRole, "id">
  : V extends "hrUserRole.view"
  ? Pick<
      HrUserRole,
      "id" | "dateFrom" | "dateTo" | "legacyID" | "role" | "user"
    >
  : never;
