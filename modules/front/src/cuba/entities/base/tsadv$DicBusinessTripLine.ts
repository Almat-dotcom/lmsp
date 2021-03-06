import { AbstractDictionary } from "./AbstractDictionary";
import { BusinessTrip } from "./tsadv$BusinessTrip";
import { DicCity } from "./base$DicCity";
export class DicBusinessTripLine extends AbstractDictionary {
  static NAME = "tsadv$DicBusinessTripLine";
  trip?: BusinessTrip | null;
  city?: DicCity | null;
  dateFrom?: any | null;
  dateTo?: any | null;
}
export type DicBusinessTripLineViewName = "_base" | "_local" | "_minimal";
export type DicBusinessTripLineView<
  V extends DicBusinessTripLineViewName
> = V extends "_base"
  ? Pick<
      DicBusinessTripLine,
      | "id"
      | "city"
      | "dateFrom"
      | "dateTo"
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
      DicBusinessTripLine,
      | "id"
      | "dateFrom"
      | "dateTo"
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
  ? Pick<
      DicBusinessTripLine,
      "id" | "city" | "dateFrom" | "dateTo" | "langValue"
    >
  : never;
