import { AbstractDictionary } from "./AbstractDictionary";
import { DicAttestationResult } from "./tsadv$DicAttestationResult";
export class DicAttestationEvent extends AbstractDictionary {
  static NAME = "tsadv$DicAttestationEvent";
  dicAttestationResult?: DicAttestationResult | null;
}
export type DicAttestationEventViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "dicAttestationEvent.edit";
export type DicAttestationEventView<
  V extends DicAttestationEventViewName
> = V extends "_base"
  ? Pick<
      DicAttestationEvent,
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
      DicAttestationEvent,
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
  ? Pick<DicAttestationEvent, "id" | "langValue">
  : V extends "dicAttestationEvent.edit"
  ? Pick<
      DicAttestationEvent,
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
      | "dicAttestationResult"
    >
  : never;
