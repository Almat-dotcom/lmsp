import { AbstractParty } from "./AbstractParty";
import { DicSex } from "./base$DicSex";
import { DicCountry } from "./base$DicCountry";
import { FileDescriptor } from "./sys$FileDescriptor";
export class Contact extends AbstractParty {
  static NAME = "base$Contact";
  lastName?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  nickName?: string | null;
  sex?: DicSex | null;
  nationalIdentifier?: string | null;
  dateOfBirth?: any | null;
  birthPlace?: string | null;
  resident?: boolean | null;
  residentCountry?: DicCountry | null;
  photo?: FileDescriptor | null;
  upperLastName?: string | null;
  upperFirstName?: string | null;
  upperMiddleName?: string | null;
}
export type ContactViewName = "_base" | "_local" | "_minimal";
export type ContactView<V extends ContactViewName> = V extends "_base"
  ? Pick<
      Contact,
      | "id"
      | "lastName"
      | "firstName"
      | "middleName"
      | "nickName"
      | "nationalIdentifier"
      | "dateOfBirth"
      | "birthPlace"
      | "resident"
      | "upperLastName"
      | "upperFirstName"
      | "upperMiddleName"
      | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      Contact,
      | "id"
      | "lastName"
      | "firstName"
      | "middleName"
      | "nickName"
      | "nationalIdentifier"
      | "dateOfBirth"
      | "birthPlace"
      | "resident"
      | "upperLastName"
      | "upperFirstName"
      | "upperMiddleName"
      | "legacyID"
    >
  : V extends "_minimal"
  ? Pick<Contact, "id" | "lastName" | "firstName">
  : never;
