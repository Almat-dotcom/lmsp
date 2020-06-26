import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class ActivityTask extends BaseUuidEntity {
  static NAME = "tsadv$ActivityTask";
  activity?: any | null;
  orderCode?: string | null;
  processEn?: string | null;
  personGroup?: any | null;
  orderDate?: any | null;
  status?: number | null;
  processRu?: string | null;
  startDate?: any | null;
  expiryDate?: any | null;
  isExpiredTask?: boolean | null;
  detailRu?: string | null;
  detailEn?: string | null;
}
export type ActivityTaskViewName = "_base" | "_local" | "_minimal";
export type ActivityTaskView<V extends ActivityTaskViewName> = V extends "_base"
  ? Pick<
      ActivityTask,
      | "id"
      | "orderCode"
      | "processEn"
      | "orderDate"
      | "status"
      | "processRu"
      | "startDate"
      | "expiryDate"
      | "isExpiredTask"
      | "detailRu"
      | "detailEn"
    >
  : V extends "_local"
  ? Pick<
      ActivityTask,
      | "id"
      | "orderCode"
      | "processEn"
      | "orderDate"
      | "status"
      | "processRu"
      | "startDate"
      | "expiryDate"
      | "isExpiredTask"
      | "detailRu"
      | "detailEn"
    >
  : V extends "_minimal"
  ? Pick<ActivityTask, "id" | "orderCode">
  : never;
