import { StandardEntity } from "../base/sys$StandardEntity";
import { CoinDistributionRule } from "./tsadv$CoinDistributionRule";
export class CoinDistributionJob extends StandardEntity {
  static NAME = "tsadv$CoinDistributionJob";
  jobGroup?: any | null;
  coinDistributionRule?: CoinDistributionRule | null;
}
export type CoinDistributionJobViewName = "_base" | "_local" | "_minimal";
export type CoinDistributionJobView<
  V extends CoinDistributionJobViewName
> = never;
