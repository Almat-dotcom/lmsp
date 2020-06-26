import { StandardEntity } from "../base/sys$StandardEntity";
import { Medal } from "./tsadv$Medal";
export class MedalCondition extends StandardEntity {
  static NAME = "tsadv$MedalCondition";
  medal?: Medal | null;
  quality?: any | null;
  qualityQuantity?: any | null;
  childMedal?: Medal | null;
  medalQuantity?: any | null;
}
export type MedalConditionViewName = "_base" | "_local" | "_minimal";
export type MedalConditionView<
  V extends MedalConditionViewName
> = V extends "_base"
  ? Pick<MedalCondition, "id" | "qualityQuantity" | "medalQuantity">
  : V extends "_local"
  ? Pick<MedalCondition, "id" | "qualityQuantity" | "medalQuantity">
  : never;
