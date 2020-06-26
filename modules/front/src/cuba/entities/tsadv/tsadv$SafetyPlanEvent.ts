import { StandardEntity } from "../base/sys$StandardEntity";
export class SafetyPlanEvent extends StandardEntity {
  static NAME = "tsadv$SafetyPlanEvent";
  planName?: string | null;
  assignedEvent?: any | null;
  description?: string | null;
  dateFrom?: any | null;
  dateTo?: any | null;
  active?: boolean | null;
  organization?: any | null;
}
export type SafetyPlanEventViewName = "_base" | "_local" | "_minimal";
export type SafetyPlanEventView<
  V extends SafetyPlanEventViewName
> = V extends "_base"
  ? Pick<
      SafetyPlanEvent,
      "id" | "description" | "planName" | "dateFrom" | "dateTo" | "active"
    >
  : V extends "_local"
  ? Pick<
      SafetyPlanEvent,
      "id" | "planName" | "description" | "dateFrom" | "dateTo" | "active"
    >
  : V extends "_minimal"
  ? Pick<SafetyPlanEvent, "id" | "description">
  : never;
