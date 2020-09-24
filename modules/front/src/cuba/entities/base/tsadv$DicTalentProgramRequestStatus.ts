import { AbstractDictionary } from "./AbstractDictionary";
export class DicTalentProgramRequestStatus extends AbstractDictionary {
  static NAME = "tsadv$DicTalentProgramRequestStatus";
}
export type DicTalentProgramRequestStatusViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type DicTalentProgramRequestStatusView<
  V extends DicTalentProgramRequestStatusViewName
> = V extends "_base"
  ? Pick<
      DicTalentProgramRequestStatus,
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
      DicTalentProgramRequestStatus,
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
  ? Pick<DicTalentProgramRequestStatus, "id" | "langValue">
  : never;
