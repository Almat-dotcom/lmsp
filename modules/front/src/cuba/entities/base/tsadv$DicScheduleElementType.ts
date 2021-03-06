import { AbstractDictionary } from "./AbstractDictionary";
export class DicScheduleElementType extends AbstractDictionary {
  static NAME = "tsadv$DicScheduleElementType";
  shortName1?: string | null;
  shortName2?: string | null;
  shortName3?: string | null;
  shortName4?: string | null;
  shortName5?: string | null;
  timeFrom?: any | null;
  timeTo?: any | null;
  displayOnTimecardEditScreen?: boolean | null;
  shortName?: string | null;
}
export type DicScheduleElementTypeViewName = "_base" | "_local" | "_minimal";
export type DicScheduleElementTypeView<
  V extends DicScheduleElementTypeViewName
> = V extends "_base"
  ? Pick<
      DicScheduleElementType,
      | "id"
      | "langValue"
      | "shortName1"
      | "shortName2"
      | "shortName3"
      | "shortName4"
      | "shortName5"
      | "timeFrom"
      | "timeTo"
      | "displayOnTimecardEditScreen"
      | "shortName"
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
      DicScheduleElementType,
      | "id"
      | "shortName1"
      | "shortName2"
      | "shortName3"
      | "shortName4"
      | "shortName5"
      | "timeFrom"
      | "timeTo"
      | "displayOnTimecardEditScreen"
      | "shortName"
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
  ? Pick<DicScheduleElementType, "id" | "langValue">
  : never;
