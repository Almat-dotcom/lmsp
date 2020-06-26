import { StandardEntity } from "../base/sys$StandardEntity";
import { BpmRolesLink } from "./tsadv$BpmRolesLink";
export class BpmRolesDefiner extends StandardEntity {
  static NAME = "tsadv$BpmRolesDefiner";
  procModel?: any | null;
  links?: BpmRolesLink[] | null;
}
export type BpmRolesDefinerViewName = "_base" | "_local" | "_minimal";
export type BpmRolesDefinerView<V extends BpmRolesDefinerViewName> = never;
