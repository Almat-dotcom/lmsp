import { StandardEntity } from "../base/sys$StandardEntity";
import { CoinDistributionRule } from "./tsadv$CoinDistributionRule";
export class CoinDistributionPosition extends StandardEntity {
  static NAME = "tsadv$CoinDistributionPosition";
  positionGroup?: any | null;
  coinDistributionRule?: CoinDistributionRule | null;
}
export type CoinDistributionPositionViewName = "_base" | "_local" | "_minimal";
export type CoinDistributionPositionView<
  V extends CoinDistributionPositionViewName
> = never;
