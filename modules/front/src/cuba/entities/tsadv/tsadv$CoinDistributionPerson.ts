import { StandardEntity } from "../base/sys$StandardEntity";
import { CoinDistributionRule } from "./tsadv$CoinDistributionRule";
export class CoinDistributionPerson extends StandardEntity {
  static NAME = "tsadv$CoinDistributionPerson";
  personGroup?: any | null;
  coinDistributionRule?: CoinDistributionRule | null;
}
export type CoinDistributionPersonViewName = "_base" | "_local" | "_minimal";
export type CoinDistributionPersonView<
  V extends CoinDistributionPersonViewName
> = never;
