import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class PersonPercentage extends BaseUuidEntity {
  static NAME = "tsadv$PersonPercentage";
  assignment?: any | null;
  managerAssignment?: any | null;
  organization?: any | null;
  position?: any | null;
  matrix?: number | null;
  match?: number | null;
  location?: string | null;
}
export type PersonPercentageViewName = "_base" | "_local" | "_minimal";
export type PersonPercentageView<V extends PersonPercentageViewName> = never;
