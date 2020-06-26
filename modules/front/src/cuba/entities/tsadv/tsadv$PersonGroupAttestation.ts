import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class PersonGroupAttestation extends BaseUuidEntity {
  static NAME = "tsadv$PersonGroupAttestation";
  personGroupExt?: any | null;
  attestation?: any | null;
}
export type PersonGroupAttestationViewName = "_base" | "_local" | "_minimal";
export type PersonGroupAttestationView<
  V extends PersonGroupAttestationViewName
> = never;
