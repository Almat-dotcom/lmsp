import { AbstractDictionary } from "./AbstractDictionary";
import { DicTransportType } from "./tsadv$DicTransportType";
export class DicTransportClass extends AbstractDictionary {
  static NAME = "tsadv$DicTransportClass";
  transportType?: DicTransportType | null;
}
export type DicTransportClassViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "dicTransportClass.all";
export type DicTransportClassView<
  V extends DicTransportClassViewName
> = V extends "_base"
  ? Pick<
      DicTransportClass,
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
      DicTransportClass,
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
  ? Pick<DicTransportClass, "id" | "langValue">
  : V extends "dicTransportClass.all"
  ? Pick<
      DicTransportClass,
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
      | "transportType"
    >
  : never;
