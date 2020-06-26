import { StandardEntity } from "../base/sys$StandardEntity";
import { Medal } from "./tsadv$Medal";
export class PersonMedal extends StandardEntity {
  static NAME = "tsadv$PersonMedal";
  personGroup?: any | null;
  medal?: Medal | null;
}
export type PersonMedalViewName = "_base" | "_local" | "_minimal";
export type PersonMedalView<V extends PersonMedalViewName> = never;
