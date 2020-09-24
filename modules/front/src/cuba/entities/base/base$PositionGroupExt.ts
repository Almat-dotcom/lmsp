import { PositionGroup } from "./base$PositionGroup";
import { PositionExt } from "./base$PositionExt";
import { VacationConditions } from "./tsadv$VacationConditions";
import { OrgAnalytics } from "./tsadv$OrgAnalytics";
import { AssignmentExt } from "./base$AssignmentExt";
import { CompetenceElement } from "./tsadv$CompetenceElement";
import { Case } from "./tsadv$Case";
import { SurCharge } from "./tsadv$SurCharge";
import { FlightTimeRate } from "./tsadv$FlightTimeRate";
import { FlySurCharge } from "./tsadv$FlySurCharge";
import { PositionGroupGoalLink } from "./tsadv$PositionGroupGoalLink";
import { PerformancePlan } from "./tsadv$PerformancePlan";
import { DicHrRole } from "./tsadv$DicHrRole";
export class PositionGroupExt extends PositionGroup {
  static NAME = "base$PositionGroupExt";
  list?: PositionExt[] | null;
  vacationConditionsList?: VacationConditions[] | null;
  analytics?: OrgAnalytics | null;
  position?: PositionExt | null;
  assignments?: AssignmentExt[] | null;
  competenceElements?: CompetenceElement[] | null;
  cases?: Case[] | null;
  surCharge?: SurCharge[] | null;
  flightTimeRate?: FlightTimeRate[] | null;
  flySurCharge?: FlySurCharge[] | null;
  goals?: PositionGroupGoalLink[] | null;
  performancePlans?: PerformancePlan[] | null;
  adminApprove?: DicHrRole | null;
  positionName?: string | null;
  fullName?: string | null;
}
export type PositionGroupExtViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "position.analytic.update"
  | "positionGroup.browse"
  | "positionGroup.change.request"
  | "positionGroup.filter"
  | "positionGroup.for.notification"
  | "positionGroup.forAssess"
  | "positionGroup.list"
  | "positionGroup.scheduleView"
  | "positionGroup.timecard"
  | "positionGroupExt-view"
  | "positionGroupExt.admin.approve"
  | "positionGroupExt.for.requisition"
  | "positionGroupExtReqLookupPickerField";
export type PositionGroupExtView<
  V extends PositionGroupExtViewName
> = V extends "_base"
  ? Pick<PositionGroupExt, "id" | "positionName" | "fullName" | "legacyID">
  : V extends "_local"
  ? Pick<PositionGroupExt, "id" | "positionName" | "fullName" | "legacyID">
  : V extends "_minimal"
  ? Pick<PositionGroupExt, "id">
  : V extends "position.analytic.update"
  ? Pick<PositionGroupExt, "id" | "analytics">
  : V extends "positionGroup.browse"
  ? Pick<PositionGroupExt, "id" | "list" | "position" | "cases" | "analytics">
  : V extends "positionGroup.change.request"
  ? Pick<
      PositionGroupExt,
      "id" | "positionName" | "fullName" | "legacyID" | "list" | "position"
    >
  : V extends "positionGroup.filter"
  ? Pick<PositionGroupExt, "id" | "list" | "position" | "analytics">
  : V extends "positionGroup.for.notification"
  ? Pick<PositionGroupExt, "id" | "list" | "position">
  : V extends "positionGroup.forAssess"
  ? Pick<PositionGroupExt, "id" | "competenceElements" | "analytics">
  : V extends "positionGroup.list"
  ? Pick<
      PositionGroupExt,
      "id" | "list" | "position" | "vacationConditionsList" | "analytics"
    >
  : V extends "positionGroup.scheduleView"
  ? Pick<PositionGroupExt, "id" | "list" | "assignments">
  : V extends "positionGroup.timecard"
  ? Pick<
      PositionGroupExt,
      | "id"
      | "positionName"
      | "fullName"
      | "legacyID"
      | "position"
      | "assignments"
    >
  : V extends "positionGroupExt-view"
  ? Pick<
      PositionGroupExt,
      "id" | "positionName" | "fullName" | "legacyID" | "list" | "fullName"
    >
  : V extends "positionGroupExt.admin.approve"
  ? Pick<
      PositionGroupExt,
      "id" | "positionName" | "fullName" | "legacyID" | "adminApprove"
    >
  : V extends "positionGroupExt.for.requisition"
  ? Pick<
      PositionGroupExt,
      "id" | "positionName" | "fullName" | "legacyID" | "list" | "position"
    >
  : V extends "positionGroupExtReqLookupPickerField"
  ? Pick<
      PositionGroupExt,
      | "id"
      | "positionName"
      | "fullName"
      | "legacyID"
      | "list"
      | "position"
      | "analytics"
    >
  : never;
