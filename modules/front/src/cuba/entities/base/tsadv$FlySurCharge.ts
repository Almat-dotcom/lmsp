import { AbstractParentEntity } from "./AbstractParentEntity";
import { PositionGroupExt } from "./base$PositionGroupExt";
import { AssignmentGroupExt } from "./base$AssignmentGroupExt";
export class FlySurCharge extends AbstractParentEntity {
  static NAME = "tsadv$FlySurCharge";
  positionGroupId?: PositionGroupExt | null;
  allowed?: boolean | null;
  assignmentGroupId?: AssignmentGroupExt | null;
  level?: string | null;
  flyingHours?: any | null;
  flyingSurcharge?: any | null;
  bonus?: any | null;
  ratePerHour?: any | null;
  dateFrom?: any | null;
  dateTo?: any | null;
}
export type FlySurChargeViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "flySurCharge-view";
export type FlySurChargeView<V extends FlySurChargeViewName> = V extends "_base"
  ? Pick<
      FlySurCharge,
      | "id"
      | "allowed"
      | "level"
      | "flyingHours"
      | "flyingSurcharge"
      | "bonus"
      | "ratePerHour"
      | "dateFrom"
      | "dateTo"
      | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      FlySurCharge,
      | "id"
      | "allowed"
      | "level"
      | "flyingHours"
      | "flyingSurcharge"
      | "bonus"
      | "ratePerHour"
      | "dateFrom"
      | "dateTo"
      | "legacyID"
    >
  : V extends "flySurCharge-view"
  ? Pick<
      FlySurCharge,
      | "id"
      | "allowed"
      | "level"
      | "flyingHours"
      | "flyingSurcharge"
      | "bonus"
      | "ratePerHour"
      | "dateFrom"
      | "dateTo"
      | "legacyID"
      | "positionGroupId"
      | "assignmentGroupId"
    >
  : never;
