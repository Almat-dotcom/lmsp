import { AbstractDictionary } from "./AbstractDictionary";
export class DicSettlementType extends AbstractDictionary {
  static NAME = "base$DicSettlementType";
  shortNameLang1?: string | null;
  shortNameLang2?: string | null;
  shortNameLang3?: string | null;
  shortNameLang4?: string | null;
  shortNameLang5?: string | null;
}
export type DicSettlementTypeViewName = "_base" | "_local" | "_minimal";
export type DicSettlementTypeView<
  V extends DicSettlementTypeViewName
> = V extends "_base"
  ? Pick<
      DicSettlementType,
      | "id"
      | "langValue"
      | "shortNameLang1"
      | "shortNameLang2"
      | "shortNameLang3"
      | "shortNameLang4"
      | "shortNameLang5"
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
      DicSettlementType,
      | "id"
      | "shortNameLang1"
      | "shortNameLang2"
      | "shortNameLang3"
      | "shortNameLang4"
      | "shortNameLang5"
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
  ? Pick<DicSettlementType, "id" | "langValue">
  : never;
