import { StandardEntity } from "../base/sys$StandardEntity";
export class RequisitionRequirement extends StandardEntity {
  static NAME = "tsadv$RequisitionRequirement";
  requirement?: any | null;
  requisition?: any | null;
  requirementLevel?: any | null;
  critical?: boolean | null;
}
export type RequisitionRequirementViewName = "_base" | "_local" | "_minimal";
export type RequisitionRequirementView<
  V extends RequisitionRequirementViewName
> = V extends "_base"
  ? Pick<RequisitionRequirement, "id" | "requirement" | "critical">
  : V extends "_local"
  ? Pick<RequisitionRequirement, "id" | "critical">
  : V extends "_minimal"
  ? Pick<RequisitionRequirement, "id" | "requirement">
  : never;
