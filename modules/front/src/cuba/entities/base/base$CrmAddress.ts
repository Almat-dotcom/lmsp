import { AbstractParentEntity } from "./AbstractParentEntity";
import { DicCountry } from "./base$DicCountry";
import { Party } from "./base$Party";
export class CrmAddress extends AbstractParentEntity {
  static NAME = "base$CrmAddress";
  country?: DicCountry | null;
  region?: string | null;
  district?: string | null;
  city?: string | null;
  street?: string | null;
  hose?: string | null;
  building?: string | null;
  apartment?: string | null;
  parties?: Party[] | null;
}
export type CrmAddressViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "crmAddress.edit";
export type CrmAddressView<V extends CrmAddressViewName> = V extends "_base"
  ? Pick<
      CrmAddress,
      | "id"
      | "region"
      | "district"
      | "city"
      | "street"
      | "hose"
      | "building"
      | "apartment"
      | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      CrmAddress,
      | "id"
      | "region"
      | "district"
      | "city"
      | "street"
      | "hose"
      | "building"
      | "apartment"
      | "legacyID"
    >
  : V extends "crmAddress.edit"
  ? Pick<
      CrmAddress,
      | "id"
      | "region"
      | "district"
      | "city"
      | "street"
      | "hose"
      | "building"
      | "apartment"
      | "legacyID"
      | "country"
    >
  : never;
