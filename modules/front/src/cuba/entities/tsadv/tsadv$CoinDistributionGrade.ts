import { StandardEntity } from "../base/sys$StandardEntity";
import { CoinDistributionRule } from "./tsadv$CoinDistributionRule";
export class CoinDistributionGrade extends StandardEntity {
  static NAME = "tsadv$CoinDistributionGrade";
  gradeGroup?: any | null;
  coinDistributionRule?: CoinDistributionRule | null;
}
export type CoinDistributionGradeViewName = "_base" | "_local" | "_minimal";
export type CoinDistributionGradeView<
  V extends CoinDistributionGradeViewName
> = never;
