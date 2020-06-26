import { StandardEntity } from "../base/sys$StandardEntity";
import { LearnerGroup } from "./tsadv$LearnerGroup";
export class Learner extends StandardEntity {
  static NAME = "tsadv$Learner";
  group?: LearnerGroup | null;
  personGroup?: any | null;
}
export type LearnerViewName = "_base" | "_local" | "_minimal";
export type LearnerView<V extends LearnerViewName> = V extends "_base"
  ? Pick<Learner, "id" | "group" | "personGroup">
  : V extends "_minimal"
  ? Pick<Learner, "id" | "group" | "personGroup">
  : never;
