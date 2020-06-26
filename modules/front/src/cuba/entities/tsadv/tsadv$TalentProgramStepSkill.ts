import { StandardEntity } from "../base/sys$StandardEntity";
import { TalentProgramStep } from "./tsadv$TalentProgramStep";
export class TalentProgramStepSkill extends StandardEntity {
  static NAME = "tsadv$TalentProgramStepSkill";
  orderNumber?: number | null;
  talentProgramStep?: TalentProgramStep | null;
  skill?: any | null;
}
export type TalentProgramStepSkillViewName = "_base" | "_local" | "_minimal";
export type TalentProgramStepSkillView<
  V extends TalentProgramStepSkillViewName
> = V extends "_base"
  ? Pick<TalentProgramStepSkill, "id" | "talentProgramStep" | "orderNumber">
  : V extends "_local"
  ? Pick<TalentProgramStepSkill, "id" | "orderNumber">
  : V extends "_minimal"
  ? Pick<TalentProgramStepSkill, "id" | "talentProgramStep">
  : never;
