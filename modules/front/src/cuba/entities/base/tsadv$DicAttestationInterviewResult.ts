import { AbstractDictionary } from "./AbstractDictionary";
export class DicAttestationInterviewResult extends AbstractDictionary {
  static NAME = "tsadv$DicAttestationInterviewResult";
}
export type DicAttestationInterviewResultViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type DicAttestationInterviewResultView<
  V extends DicAttestationInterviewResultViewName
> = V extends "_base"
  ? Pick<
      DicAttestationInterviewResult,
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
      DicAttestationInterviewResult,
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
  ? Pick<DicAttestationInterviewResult, "id" | "langValue">
  : never;
