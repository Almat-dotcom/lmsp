import { AbstractDictionary } from "./AbstractDictionary";
export class DicLengthOfServiceType extends AbstractDictionary {
  static NAME = "tsadv$DicLengthOfServiceType";
}
export type DicLengthOfServiceTypeViewName = "_base" | "_local" | "_minimal";
export type DicLengthOfServiceTypeView<
  V extends DicLengthOfServiceTypeViewName
> = V extends "_base"
  ? Pick<
      DicLengthOfServiceType,
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
      DicLengthOfServiceType,
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
  ? Pick<DicLengthOfServiceType, "id" | "langValue">
  : never;
