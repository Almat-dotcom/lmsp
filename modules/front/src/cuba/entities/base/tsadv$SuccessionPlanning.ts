import { AbstractParentEntity } from "./AbstractParentEntity";
import { PositionGroupExt } from "./base$PositionGroupExt";
import { Successor } from "./tsadv$Successor";
import { PersonGroupExt } from "./base$PersonGroupExt";
export class SuccessionPlanning extends AbstractParentEntity {
  static NAME = "tsadv$SuccessionPlanning";
  positionGroup?: PositionGroupExt | null;
  startDate?: any | null;
  endDate?: any | null;
  description?: string | null;
  successors?: Successor[] | null;
  personGroup?: PersonGroupExt | null;
  positionName?: string | null;
}
export type SuccessionPlanningViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "successionPlanning.browse";
export type SuccessionPlanningView<
  V extends SuccessionPlanningViewName
> = V extends "_base"
  ? Pick<
      SuccessionPlanning,
      | "id"
      | "positionName"
      | "startDate"
      | "endDate"
      | "description"
      | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      SuccessionPlanning,
      | "id"
      | "startDate"
      | "endDate"
      | "description"
      | "positionName"
      | "legacyID"
    >
  : V extends "_minimal"
  ? Pick<SuccessionPlanning, "id" | "positionName">
  : V extends "successionPlanning.browse"
  ? Pick<
      SuccessionPlanning,
      | "id"
      | "startDate"
      | "endDate"
      | "description"
      | "positionName"
      | "legacyID"
      | "positionGroup"
      | "successors"
    >
  : never;
