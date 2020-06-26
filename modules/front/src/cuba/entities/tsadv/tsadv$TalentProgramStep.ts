import { StandardEntity } from "../base/sys$StandardEntity";
import { TalentProgram } from "./tsadv$TalentProgram";
export class TalentProgramStep extends StandardEntity {
  static NAME = "tsadv$TalentProgramStep";
  talentProgram?: TalentProgram | null;
  orderNum?: number | null;
  step?: any | null;
  notification?: any | null;
}
export type TalentProgramStepViewName = "_base" | "_local" | "_minimal";
export type TalentProgramStepView<
  V extends TalentProgramStepViewName
> = V extends "_base"
  ? Pick<TalentProgramStep, "id" | "step" | "orderNum">
  : V extends "_local"
  ? Pick<TalentProgramStep, "id" | "orderNum">
  : V extends "_minimal"
  ? Pick<TalentProgramStep, "id" | "step">
  : never;
