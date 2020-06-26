import { StandardEntity } from "../base/sys$StandardEntity";
import { AwardProgram } from "./tsadv$AwardProgram";
export class PersonAward extends StandardEntity {
  static NAME = "tsadv$PersonAward";
  type?: any | null;
  awardProgram?: AwardProgram | null;
  date?: any | null;
  author?: any | null;
  receiver?: any | null;
  history?: string | null;
  why?: string | null;
  status?: string | null;
}
export type PersonAwardViewName = "_base" | "_local" | "_minimal";
export type PersonAwardView<V extends PersonAwardViewName> = V extends "_base"
  ? Pick<PersonAward, "id" | "date" | "history" | "why" | "status">
  : V extends "_local"
  ? Pick<PersonAward, "id" | "date" | "history" | "why" | "status">
  : never;
