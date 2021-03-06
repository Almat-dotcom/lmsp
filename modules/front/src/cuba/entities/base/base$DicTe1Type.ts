import { AbstractDictionary } from "./AbstractDictionary";
export class DicTe1Type extends AbstractDictionary {
  static NAME = "base$DicTe1Type";
  shortNameLang1?: string | null;
  shortNameLang2?: string | null;
  shortNameLang3?: string | null;
  shortNameLang4?: string | null;
  shortNameLang5?: string | null;
}
export type DicTe1TypeViewName = "_base" | "_local" | "_minimal";
export type DicTe1TypeView<V extends DicTe1TypeViewName> = V extends "_base"
  ? Pick<
      DicTe1Type,
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
      DicTe1Type,
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
  ? Pick<DicTe1Type, "id" | "langValue">
  : never;
