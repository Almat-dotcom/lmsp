import { StandardEntity } from "../base/sys$StandardEntity";
import { Group } from "../base/sec$Group";
export class SecurityPersonType extends StandardEntity {
  static NAME = "tsadv$SecurityPersonType";
  securityGroup?: Group | null;
  personType?: any | null;
}
export type SecurityPersonTypeViewName = "_base" | "_local" | "_minimal";
export type SecurityPersonTypeView<
  V extends SecurityPersonTypeViewName
> = never;
