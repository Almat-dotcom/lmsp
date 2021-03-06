import { AbstractDictionary } from "./AbstractDictionary";
export class DicParticipantType extends AbstractDictionary {
  static NAME = "tsadv$DicParticipantType";
}
export type DicParticipantTypeViewName = "_base" | "_local" | "_minimal";
export type DicParticipantTypeView<
  V extends DicParticipantTypeViewName
> = V extends "_base"
  ? Pick<
      DicParticipantType,
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
      DicParticipantType,
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
  ? Pick<DicParticipantType, "id" | "langValue">
  : never;
