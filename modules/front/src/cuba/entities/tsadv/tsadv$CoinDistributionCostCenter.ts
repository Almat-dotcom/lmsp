import { StandardEntity } from "../base/sys$StandardEntity";
import { CoinDistributionRule } from "./tsadv$CoinDistributionRule";
export class CoinDistributionCostCenter extends StandardEntity {
  static NAME = "tsadv$CoinDistributionCostCenter";
  costCenter?: any | null;
  coinDistributionRule?: CoinDistributionRule | null;
}
export type CoinDistributionCostCenterViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type CoinDistributionCostCenterView<
  V extends CoinDistributionCostCenterViewName
> = never;
