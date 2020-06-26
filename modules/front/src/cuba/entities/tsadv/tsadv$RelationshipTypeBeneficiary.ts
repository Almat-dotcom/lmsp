import { StandardEntity } from "../base/sys$StandardEntity";
export class RelationshipTypeBeneficiary extends StandardEntity {
  static NAME = "tsadv$RelationshipTypeBeneficiary";
  parent?: any | null;
  child?: any | null;
}
export type RelationshipTypeBeneficiaryViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type RelationshipTypeBeneficiaryView<
  V extends RelationshipTypeBeneficiaryViewName
> = V extends "_base"
  ? Pick<RelationshipTypeBeneficiary, "id" | "parent" | "child">
  : V extends "_minimal"
  ? Pick<RelationshipTypeBeneficiary, "id" | "parent" | "child">
  : never;
