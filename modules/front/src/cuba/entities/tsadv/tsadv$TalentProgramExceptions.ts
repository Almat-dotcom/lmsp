import { StandardEntity } from "../base/sys$StandardEntity";
import { TalentProgram } from "./tsadv$TalentProgram";
export class TalentProgramExceptions extends StandardEntity {
  static NAME = "tsadv$TalentProgramExceptions";
  talentProgram?: TalentProgram | null;
  personGroup?: any | null;
}
export type TalentProgramExceptionsViewName = "_base" | "_local" | "_minimal";
export type TalentProgramExceptionsView<
  V extends TalentProgramExceptionsViewName
> = V extends "_base"
  ? Pick<TalentProgramExceptions, "id" | "talentProgram">
  : V extends "_minimal"
  ? Pick<TalentProgramExceptions, "id" | "talentProgram">
  : never;
