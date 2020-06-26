import { StandardEntity } from "../base/sys$StandardEntity";
import { FileDescriptor } from "../base/sys$FileDescriptor";
export class AttestationParticipant extends StandardEntity {
  static NAME = "tsadv$AttestationParticipant";
  attestation?: any | null;
  personGroup?: any | null;
  attestationDate?: any | null;
  passingLanguage?: string | null;
  result?: any | null;
  event?: any | null;
  interviewResult?: any | null;
  commissionRecomendation?: string | null;
  notAppeared?: boolean | null;
  notAppearedReason?: string | null;
  protocol?: string | null;
  attachment?: FileDescriptor | null;
}
export type AttestationParticipantViewName = "_base" | "_local" | "_minimal";
export type AttestationParticipantView<
  V extends AttestationParticipantViewName
> = V extends "_base"
  ? Pick<
      AttestationParticipant,
      | "id"
      | "attestation"
      | "attestationDate"
      | "passingLanguage"
      | "commissionRecomendation"
      | "notAppeared"
      | "notAppearedReason"
      | "protocol"
    >
  : V extends "_local"
  ? Pick<
      AttestationParticipant,
      | "id"
      | "attestationDate"
      | "passingLanguage"
      | "commissionRecomendation"
      | "notAppeared"
      | "notAppearedReason"
      | "protocol"
    >
  : V extends "_minimal"
  ? Pick<AttestationParticipant, "id" | "attestation">
  : never;
