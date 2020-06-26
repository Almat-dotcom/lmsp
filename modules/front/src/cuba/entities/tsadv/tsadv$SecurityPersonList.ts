import { StandardEntity } from "../base/sys$StandardEntity";
import { Group } from "../base/sec$Group";
export class SecurityPersonList extends StandardEntity {
  static NAME = "tsadv$SecurityPersonList";
  securityGroup?: Group | null;
  personGroup?: any | null;
  transactionDate?: any | null;
}
export type SecurityPersonListViewName = "_base" | "_local" | "_minimal";
export type SecurityPersonListView<
  V extends SecurityPersonListViewName
> = V extends "_base"
  ? Pick<SecurityPersonList, "id" | "transactionDate">
  : V extends "_local"
  ? Pick<SecurityPersonList, "id" | "transactionDate">
  : never;
