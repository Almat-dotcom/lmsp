import { StandardEntity } from "../base/sys$StandardEntity";
export class PositionBpmRole extends StandardEntity {
  static NAME = "tsadv$PositionBpmRole";
  positionGroup?: any | null;
  procModel?: any | null;
  bpmRolesLink?: any | null;
}
export type PositionBpmRoleViewName = "_base" | "_local" | "_minimal";
export type PositionBpmRoleView<V extends PositionBpmRoleViewName> = never;
