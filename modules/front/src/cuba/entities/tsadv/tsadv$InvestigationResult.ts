import { StandardEntity } from "../base/sys$StandardEntity";
export class InvestigationResult extends StandardEntity {
  static NAME = "tsadv$InvestigationResult";
  investigationDate?: any | null;
  investigationType?: any | null;
  productionConnection?: boolean | null;
  employeeGuilt?: any | null;
  employerguilt?: any | null;
  accidenInjured?: any | null;
}
export type InvestigationResultViewName = "_base" | "_local" | "_minimal";
export type InvestigationResultView<
  V extends InvestigationResultViewName
> = V extends "_base"
  ? Pick<
      InvestigationResult,
      | "id"
      | "investigationDate"
      | "productionConnection"
      | "employeeGuilt"
      | "employerguilt"
    >
  : V extends "_local"
  ? Pick<
      InvestigationResult,
      | "id"
      | "investigationDate"
      | "productionConnection"
      | "employeeGuilt"
      | "employerguilt"
    >
  : never;
