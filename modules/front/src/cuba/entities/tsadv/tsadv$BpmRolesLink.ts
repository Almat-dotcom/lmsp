import { StandardEntity } from "../base/sys$StandardEntity";
import { BpmRolesDefiner } from "./tsadv$BpmRolesDefiner";
export class BpmRolesLink extends StandardEntity {
  static NAME = "tsadv$BpmRolesLink";
  bpmRolesDefiner?: BpmRolesDefiner | null;
  bpmRole?: any | null;
  hrRole?: any | null;
  required?: boolean | null;
  findByCounter?: boolean | null;
  positionBpmRole?: any | null;
}
export type BpmRolesLinkViewName = "_base" | "_local" | "_minimal";
export type BpmRolesLinkView<V extends BpmRolesLinkViewName> = V extends "_base"
  ? Pick<BpmRolesLink, "id" | "required" | "findByCounter">
  : V extends "_local"
  ? Pick<BpmRolesLink, "id" | "required" | "findByCounter">
  : never;
