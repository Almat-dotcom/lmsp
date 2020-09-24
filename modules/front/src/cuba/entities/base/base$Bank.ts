import { AbstractDictionary } from "./AbstractDictionary";
export class Bank extends AbstractDictionary {
  static NAME = "base$Bank";
  bankIdentificationCode?: string | null;
  businessIdentificationNumber?: string | null;
  beneficiaryCode?: string | null;
  name?: string | null;
  fullName?: string | null;
}
export type BankViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "bank.browse"
  | "bank.edit";
export type BankView<V extends BankViewName> = V extends "_base"
  ? Pick<
      Bank,
      | "id"
      | "langValue"
      | "bankIdentificationCode"
      | "businessIdentificationNumber"
      | "beneficiaryCode"
      | "name"
      | "fullName"
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
      Bank,
      | "id"
      | "bankIdentificationCode"
      | "businessIdentificationNumber"
      | "beneficiaryCode"
      | "name"
      | "fullName"
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
  ? Pick<Bank, "id" | "langValue">
  : V extends "bank.browse"
  ? Pick<
      Bank,
      | "id"
      | "bankIdentificationCode"
      | "businessIdentificationNumber"
      | "beneficiaryCode"
      | "name"
      | "fullName"
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
  : V extends "bank.edit"
  ? Pick<
      Bank,
      | "id"
      | "bankIdentificationCode"
      | "businessIdentificationNumber"
      | "beneficiaryCode"
      | "name"
      | "fullName"
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
  : never;
