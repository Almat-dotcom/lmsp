import { AbstractDictionary } from "./AbstractDictionary";
export class DicTalentProgramStep extends AbstractDictionary {
  static NAME = "tsadv$DicTalentProgramStep";
}
export type DicTalentProgramStepViewName = "_base" | "_local" | "_minimal";
export type DicTalentProgramStepView<
  V extends DicTalentProgramStepViewName
> = V extends "_base"
  ? Pick<
      DicTalentProgramStep,
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
      DicTalentProgramStep,
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
  ? Pick<DicTalentProgramStep, "id" | "langValue">
  : never;
