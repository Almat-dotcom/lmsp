import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class RequisitionCount extends BaseUuidEntity {
  static NAME = "tsadv$RequisitionCount";
  personGroup?: any | null;
  countRequisition?: any | null;
  countJobRequest?: any | null;
}
export type RequisitionCountViewName = "_base" | "_local" | "_minimal";
export type RequisitionCountView<V extends RequisitionCountViewName> = never;
