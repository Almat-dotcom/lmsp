import { StandardEntity } from "../base/sys$StandardEntity";
import { CoinDistributionPerson } from "./tsadv$CoinDistributionPerson";
import { CoinDistributionOrganization } from "./tsadv$CoinDistributionOrganization";
import { CoinDistributionPosition } from "./tsadv$CoinDistributionPosition";
import { CoinDistributionJob } from "./tsadv$CoinDistributionJob";
import { CoinDistributionGrade } from "./tsadv$CoinDistributionGrade";
import { CoinDistributionCostCenter } from "./tsadv$CoinDistributionCostCenter";
export class CoinDistributionRule extends StandardEntity {
  static NAME = "tsadv$CoinDistributionRule";
  name?: string | null;
  persons?: CoinDistributionPerson[] | null;
  organizations?: CoinDistributionOrganization[] | null;
  positions?: CoinDistributionPosition[] | null;
  jobs?: CoinDistributionJob[] | null;
  grades?: CoinDistributionGrade[] | null;
  costCenters?: CoinDistributionCostCenter[] | null;
  description?: string | null;
  distributionFrequency?: number | null;
  zeroFrequency?: number | null;
  active?: boolean | null;
  coins?: any | null;
}
export type CoinDistributionRuleViewName = "_base" | "_local" | "_minimal";
export type CoinDistributionRuleView<
  V extends CoinDistributionRuleViewName
> = V extends "_base"
  ? Pick<
      CoinDistributionRule,
      | "id"
      | "name"
      | "description"
      | "distributionFrequency"
      | "zeroFrequency"
      | "active"
      | "coins"
    >
  : V extends "_local"
  ? Pick<
      CoinDistributionRule,
      | "id"
      | "name"
      | "description"
      | "distributionFrequency"
      | "zeroFrequency"
      | "active"
      | "coins"
    >
  : V extends "_minimal"
  ? Pick<CoinDistributionRule, "id" | "name">
  : never;
