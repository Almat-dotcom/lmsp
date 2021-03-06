import { AbstractParentEntity } from "./AbstractParentEntity";
import { LookupValue } from "./tsadv$LookupValue";
export class LookupType extends AbstractParentEntity {
  static NAME = "tsadv$LookupType";
  lookupType?: string | null;
  lookupNameLang1?: string | null;
  lookupNameLang2?: string | null;
  lookupNameLang3?: string | null;
  lookupValue?: LookupValue[] | null;
}
export type LookupTypeViewName = "_base" | "_local" | "_minimal";
export type LookupTypeView<V extends LookupTypeViewName> = V extends "_base"
  ? Pick<
      LookupType,
      | "id"
      | "lookupType"
      | "lookupNameLang1"
      | "lookupNameLang2"
      | "lookupNameLang3"
      | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      LookupType,
      | "id"
      | "lookupType"
      | "lookupNameLang1"
      | "lookupNameLang2"
      | "lookupNameLang3"
      | "legacyID"
    >
  : never;
