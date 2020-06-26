import { StandardEntity } from "../base/sys$StandardEntity";
export class OrgAnalytics extends StandardEntity {
  static NAME = "tsadv$OrgAnalytics";
  calendar?: any | null;
  workingCondition?: any | null;
  offset?: any | null;
  organizationGroup?: any | null;
  positionGroup?: any | null;
  assignmentGroup?: any | null;
}
export type OrgAnalyticsViewName = "_base" | "_local" | "_minimal";
export type OrgAnalyticsView<V extends OrgAnalyticsViewName> = V extends "_base"
  ? Pick<OrgAnalytics, "id">
  : V extends "_minimal"
  ? Pick<OrgAnalytics, "id">
  : never;
