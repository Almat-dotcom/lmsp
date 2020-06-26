import { BaseUuidEntity } from "../sys$BaseUuidEntity";
export class ResetPasswordToken extends BaseUuidEntity {
  static NAME = "base$ResetPasswordToken";
  user?: any | null;
  token?: string | null;
  expireAt?: any | null;
  version?: number | null;
  deleteTs?: any | null;
  deletedBy?: string | null;
  updateTs?: any | null;
  updatedBy?: string | null;
  createTs?: any | null;
  createdBy?: string | null;
}
export type ResetPasswordTokenViewName = "_base" | "_local" | "_minimal";
export type ResetPasswordTokenView<
  V extends ResetPasswordTokenViewName
> = V extends "_base"
  ? Pick<ResetPasswordToken, "id" | "token" | "expireAt">
  : V extends "_local"
  ? Pick<ResetPasswordToken, "id" | "token" | "expireAt">
  : V extends "_minimal"
  ? Pick<ResetPasswordToken, "id">
  : never;
