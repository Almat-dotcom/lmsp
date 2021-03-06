import { AbstractParentEntity } from "./AbstractParentEntity";
import { RisksViolations } from "./tsadv$RisksViolations";
import { Subsections } from "./tsadv$Subsections";
import { DisconformityType } from "./tsadv$DisconformityType";
import { PersonExt } from "./base$PersonExt";
export class IdentifiedViolations extends AbstractParentEntity {
  static NAME = "tsadv$IdentifiedViolations";
  entityType?: string | null;
  risksViolations?: RisksViolations | null;
  subsections?: Subsections | null;
  type?: DisconformityType | null;
  responsible?: PersonExt | null;
  description?: string | null;
  violationDate?: any | null;
  eliminationPlanDate?: any | null;
  eliminationFactDate?: any | null;
  identifieByWorkers?: boolean | null;
}
export type IdentifiedViolationsViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "identifiedViolations-view";
export type IdentifiedViolationsView<
  V extends IdentifiedViolationsViewName
> = V extends "_base"
  ? Pick<
      IdentifiedViolations,
      | "id"
      | "entityType"
      | "description"
      | "violationDate"
      | "eliminationPlanDate"
      | "eliminationFactDate"
      | "identifieByWorkers"
      | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      IdentifiedViolations,
      | "id"
      | "entityType"
      | "description"
      | "violationDate"
      | "eliminationPlanDate"
      | "eliminationFactDate"
      | "identifieByWorkers"
      | "legacyID"
    >
  : V extends "identifiedViolations-view"
  ? Pick<
      IdentifiedViolations,
      | "id"
      | "entityType"
      | "description"
      | "violationDate"
      | "eliminationPlanDate"
      | "eliminationFactDate"
      | "identifieByWorkers"
      | "legacyID"
      | "type"
      | "responsible"
    >
  : never;
