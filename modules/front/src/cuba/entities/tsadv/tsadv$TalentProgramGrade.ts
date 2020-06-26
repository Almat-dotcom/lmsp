import { StandardEntity } from "../base/sys$StandardEntity";
import { TalentProgram } from "./tsadv$TalentProgram";
export class TalentProgramGrade extends StandardEntity {
  static NAME = "tsadv$TalentProgramGrade";
  talentProgram?: TalentProgram | null;
  gradeGroup?: any | null;
}
export type TalentProgramGradeViewName = "_base" | "_local" | "_minimal";
export type TalentProgramGradeView<
  V extends TalentProgramGradeViewName
> = V extends "_base"
  ? Pick<TalentProgramGrade, "id" | "talentProgram">
  : V extends "_minimal"
  ? Pick<TalentProgramGrade, "id" | "talentProgram">
  : never;
