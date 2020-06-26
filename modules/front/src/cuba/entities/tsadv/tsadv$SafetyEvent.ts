import { StandardEntity } from "../base/sys$StandardEntity";
export class SafetyEvent extends StandardEntity {
  static NAME = "tsadv$SafetyEvent";
  code?: string | null;
  name?: string | null;
  type?: any | null;
  uom?: any | null;
}
export type SafetyEventViewName = "_base" | "_local" | "_minimal";
export type SafetyEventView<V extends SafetyEventViewName> = V extends "_base"
  ? Pick<SafetyEvent, "id" | "name" | "code">
  : V extends "_local"
  ? Pick<SafetyEvent, "id" | "code" | "name">
  : V extends "_minimal"
  ? Pick<SafetyEvent, "id" | "name">
  : never;
