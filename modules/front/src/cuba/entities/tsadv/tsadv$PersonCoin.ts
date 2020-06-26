import { StandardEntity } from "../base/sys$StandardEntity";
export class PersonCoin extends StandardEntity {
  static NAME = "tsadv$PersonCoin";
  personGroup?: any | null;
  coins?: any | null;
}
export type PersonCoinViewName = "_base" | "_local" | "_minimal";
export type PersonCoinView<V extends PersonCoinViewName> = V extends "_base"
  ? Pick<PersonCoin, "id" | "coins">
  : V extends "_local"
  ? Pick<PersonCoin, "id" | "coins">
  : never;
