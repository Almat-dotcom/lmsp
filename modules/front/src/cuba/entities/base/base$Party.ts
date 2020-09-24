import { AbstractParty } from "./AbstractParty";
import { DicCountry } from "./base$DicCountry";
import { DicClientStatus } from "./base$DicClientStatus";
import { FileDescriptor } from "./sys$FileDescriptor";
import { CrmAddress } from "./base$CrmAddress";
import { Address } from "./base$Address";
import { ContactInfo } from "./base$ContactInfo";
export class Party extends AbstractParty {
  static NAME = "base$Party";
  name?: string | null;
  partyType?: any | null;
  nationalIdentifier?: string | null;
  active?: boolean | null;
  resident?: boolean | null;
  residenceCountry?: DicCountry | null;
  clientStatus?: DicClientStatus | null;
  image?: FileDescriptor | null;
  address?: CrmAddress[] | null;
  addresses?: Address[] | null;
  contactInfo?: ContactInfo[] | null;
  upperName?: string | null;
}
export type PartyViewName = "_base" | "_local" | "_minimal";
export type PartyView<V extends PartyViewName> = V extends "_base"
  ? Pick<
      Party,
      | "id"
      | "name"
      | "partyType"
      | "nationalIdentifier"
      | "active"
      | "resident"
      | "upperName"
      | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      Party,
      | "id"
      | "name"
      | "partyType"
      | "nationalIdentifier"
      | "active"
      | "resident"
      | "upperName"
      | "legacyID"
    >
  : V extends "_minimal"
  ? Pick<Party, "id" | "name">
  : never;
