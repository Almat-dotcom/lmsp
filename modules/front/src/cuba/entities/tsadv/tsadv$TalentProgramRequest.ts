import { StandardEntity } from "../base/sys$StandardEntity";
import { TalentProgram } from "./tsadv$TalentProgram";
export class TalentProgramRequest extends StandardEntity {
  static NAME = "tsadv$TalentProgramRequest";
  talentProgram?: TalentProgram | null;
  status?: any | null;
  personGroup?: any | null;
  requestDate?: any | null;
  essay?: string | null;
  currentStep?: any | null;
  currentStepStatus?: any | null;
}
export type TalentProgramRequestViewName = "_base" | "_local" | "_minimal";
export type TalentProgramRequestView<
  V extends TalentProgramRequestViewName
> = V extends "_base"
  ? Pick<TalentProgramRequest, "id" | "talentProgram" | "requestDate" | "essay">
  : V extends "_local"
  ? Pick<TalentProgramRequest, "id" | "requestDate" | "essay">
  : V extends "_minimal"
  ? Pick<TalentProgramRequest, "id" | "talentProgram">
  : never;
