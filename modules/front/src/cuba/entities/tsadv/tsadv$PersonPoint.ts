import { StandardEntity } from "../base/sys$StandardEntity";
export class PersonPoint extends StandardEntity {
  static NAME = "tsadv$PersonPoint";
  personGroup?: any | null;
  points?: any | null;
}
export type PersonPointViewName = "_base" | "_local" | "_minimal";
export type PersonPointView<V extends PersonPointViewName> = V extends "_base"
  ? Pick<PersonPoint, "id" | "points">
  : V extends "_local"
  ? Pick<PersonPoint, "id" | "points">
  : never;
