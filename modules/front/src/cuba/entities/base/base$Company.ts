import { AbstractParty } from "./AbstractParty";
import { FileDescriptor } from "./sys$FileDescriptor";
import { DicOrgLegalFormType } from "./base$DicOrgLegalFormType";
import { DicIndustry } from "./base$DicIndustry";
import { DicCountry } from "./base$DicCountry";
export class Company extends AbstractParty {
  static NAME = "base$Company";
  companyName?: string | null;
  webAddress?: string | null;
  image?: FileDescriptor | null;
  legalForm?: DicOrgLegalFormType | null;
  industry?: DicIndustry | null;
  bin?: string | null;
  resident?: boolean | null;
  residentCountry?: DicCountry | null;
  companyUpperName?: string | null;
  legalFullName?: string | null;
}
export type CompanyViewName = "_base" | "_local" | "_minimal";
export type CompanyView<V extends CompanyViewName> = V extends "_base"
  ? Pick<
      Company,
      | "id"
      | "companyName"
      | "webAddress"
      | "bin"
      | "resident"
      | "companyUpperName"
      | "legalFullName"
      | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      Company,
      | "id"
      | "companyName"
      | "webAddress"
      | "bin"
      | "resident"
      | "companyUpperName"
      | "legalFullName"
      | "legacyID"
    >
  : V extends "_minimal"
  ? Pick<Company, "id" | "companyName">
  : never;
