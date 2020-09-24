import { AbstractParentEntity } from "./AbstractParentEntity";
import { Attestation } from "./tsadv$Attestation";
import { PositionGroupExt } from "./base$PositionGroupExt";
export class AttestationPosition extends AbstractParentEntity {
  static NAME = "tsadv$AttestationPosition";
  attestation?: Attestation | null;
  positionGroup?: PositionGroupExt | null;
}
export type AttestationPositionViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "attestationPosition-view";
export type AttestationPositionView<
  V extends AttestationPositionViewName
> = V extends "_base"
  ? Pick<AttestationPosition, "id" | "legacyID">
  : V extends "_local"
  ? Pick<AttestationPosition, "id" | "legacyID">
  : V extends "attestationPosition-view"
  ? Pick<
      AttestationPosition,
      "id" | "legacyID" | "attestation" | "positionGroup"
    >
  : never;
