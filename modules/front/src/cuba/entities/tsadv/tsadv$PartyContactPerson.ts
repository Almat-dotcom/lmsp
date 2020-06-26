import { StandardEntity } from "../base/sys$StandardEntity";
export class PartyContactPerson extends StandardEntity {
  static NAME = "tsadv$PartyContactPerson";
  partyExt?: any | null;
  fullName?: string | null;
  contactPersonType?: any | null;
}
export type PartyContactPersonViewName = "_base" | "_local" | "_minimal";
export type PartyContactPersonView<
  V extends PartyContactPersonViewName
> = V extends "_base"
  ? Pick<PartyContactPerson, "id" | "fullName">
  : V extends "_local"
  ? Pick<PartyContactPerson, "id" | "fullName">
  : V extends "_minimal"
  ? Pick<PartyContactPerson, "id" | "fullName">
  : never;
