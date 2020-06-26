import { StandardEntity } from "../base/sys$StandardEntity";
export class UserExtJobRequestSeting extends StandardEntity {
  static NAME = "tsadv$UserExtJobRequestSeting";
  viewLater?: boolean | null;
  userExt?: any | null;
  jobRequest?: any | null;
}
export type UserExtJobRequestSetingViewName = "_base" | "_local" | "_minimal";
export type UserExtJobRequestSetingView<
  V extends UserExtJobRequestSetingViewName
> = V extends "_base"
  ? Pick<UserExtJobRequestSeting, "id" | "viewLater">
  : V extends "_local"
  ? Pick<UserExtJobRequestSeting, "id" | "viewLater">
  : never;
