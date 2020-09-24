import { AbstractDictionary } from "./AbstractDictionary";
import { TalentProgramStepSkill } from "./tsadv$TalentProgramStepSkill";
export class DicTalentProgramSkill extends AbstractDictionary {
  static NAME = "tsadv$DicTalentProgramSkill";
  talentProgramStepSkill?: TalentProgramStepSkill | null;
}
export type DicTalentProgramSkillViewName = "_base" | "_local" | "_minimal";
export type DicTalentProgramSkillView<
  V extends DicTalentProgramSkillViewName
> = V extends "_base"
  ? Pick<
      DicTalentProgramSkill,
      | "id"
      | "langValue"
      | "legacyID"
      | "langValue1"
      | "description1"
      | "langValue2"
      | "description2"
      | "langValue3"
      | "description3"
      | "langValue4"
      | "description4"
      | "langValue5"
      | "description5"
      | "startDate"
      | "endDate"
      | "code"
      | "isSystemRecord"
      | "active"
      | "order"
      | "description"
    >
  : V extends "_local"
  ? Pick<
      DicTalentProgramSkill,
      | "id"
      | "legacyID"
      | "langValue1"
      | "description1"
      | "langValue2"
      | "description2"
      | "langValue3"
      | "description3"
      | "langValue4"
      | "description4"
      | "langValue5"
      | "description5"
      | "startDate"
      | "endDate"
      | "code"
      | "isSystemRecord"
      | "active"
      | "order"
      | "langValue"
      | "description"
    >
  : V extends "_minimal"
  ? Pick<DicTalentProgramSkill, "id" | "langValue">
  : never;
