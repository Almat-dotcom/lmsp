import { StandardEntity } from "../base/sys$StandardEntity";
import { CoinDistributionRule } from "./tsadv$CoinDistributionRule";
export class CoinDistributionOrganization extends StandardEntity {
  static NAME = "tsadv$CoinDistributionOrganization";
  parentOrganizationGroup?: any | null;
  hierarchy?: any | null;
  organizationGroup?: any | null;
  coinDistributionRule?: CoinDistributionRule | null;
}
export type CoinDistributionOrganizationViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type CoinDistributionOrganizationView<
  V extends CoinDistributionOrganizationViewName
> = never;
