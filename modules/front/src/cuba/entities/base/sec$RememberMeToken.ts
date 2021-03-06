import { BaseUuidEntity } from "./sys$BaseUuidEntity";
import { User } from "./sec$User";
export class RememberMeToken extends BaseUuidEntity {
  static NAME = "sec$RememberMeToken";
  user?: User | null;
  token?: string | null;
}
export type RememberMeTokenViewName = "_base" | "_local" | "_minimal";
export type RememberMeTokenView<
  V extends RememberMeTokenViewName
> = V extends "_base"
  ? Pick<RememberMeToken, "id" | "token">
  : V extends "_local"
  ? Pick<RememberMeToken, "id" | "token">
  : never;
