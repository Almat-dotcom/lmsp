import { AbstractParentEntity } from "./AbstractParentEntity";
import { PersonGroupExt } from "./base$PersonGroupExt";
import { RcQuestion } from "./tsadv$RcQuestion";
import { RcAnswer } from "./tsadv$RcAnswer";
export class CandidateRequirement extends AbstractParentEntity {
  static NAME = "tsadv$CandidateRequirement";
  personGroup?: PersonGroupExt | null;
  requirement?: RcQuestion | null;
  level?: RcAnswer | null;
}
export type CandidateRequirementViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "candidateRequirement-view";
export type CandidateRequirementView<
  V extends CandidateRequirementViewName
> = V extends "_base"
  ? Pick<CandidateRequirement, "id" | "requirement" | "legacyID">
  : V extends "_local"
  ? Pick<CandidateRequirement, "id" | "legacyID">
  : V extends "_minimal"
  ? Pick<CandidateRequirement, "id" | "requirement">
  : V extends "candidateRequirement-view"
  ? Pick<
      CandidateRequirement,
      "id" | "legacyID" | "personGroup" | "requirement" | "level"
    >
  : never;
