import { StandardEntity } from "../base/sys$StandardEntity";
import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class ProcInstanceV extends StandardEntity {
  static NAME = "tsadv$ProcInstanceV";
  requestType?: string | null;
  processRu?: string | null;
  processEn?: string | null;
  entityName?: string | null;
  entityId?: any | null;
  requestNumber?: string | null;
  active?: boolean | null;
  startedBy?: any | null;
  startedByPersonGroup?: any | null;
  startDate?: any | null;
  endDate?: any | null;
  effectiveDate?: any | null;
  cancelled?: boolean | null;
  entity?: BaseUuidEntity | null;
  personGroup?: any | null;
  currentApprover?: any | null;
  detailRu?: string | null;
  detailEn?: string | null;
  detail?: string | null;
  procDefinition?: any | null;
  procInstance?: any | null;
}
export type ProcInstanceVViewName = "_base" | "_local" | "_minimal";
export type ProcInstanceVView<
  V extends ProcInstanceVViewName
> = V extends "_base"
  ? Pick<
      ProcInstanceV,
      | "id"
      | "requestType"
      | "requestNumber"
      | "processRu"
      | "processEn"
      | "entityName"
      | "entityId"
      | "active"
      | "startDate"
      | "endDate"
      | "effectiveDate"
      | "cancelled"
      | "detailRu"
      | "detailEn"
    >
  : V extends "_local"
  ? Pick<
      ProcInstanceV,
      | "id"
      | "processRu"
      | "processEn"
      | "entityName"
      | "entityId"
      | "requestNumber"
      | "active"
      | "startDate"
      | "endDate"
      | "effectiveDate"
      | "cancelled"
      | "detailRu"
      | "detailEn"
    >
  : V extends "_minimal"
  ? Pick<ProcInstanceV, "id" | "requestType" | "requestNumber">
  : never;
