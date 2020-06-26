import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
import { ProfilePojo } from "./tsadv$ProfilePojo";
export class ProfilePageInfo extends BaseUuidEntity {
  static NAME = "tsadv$ProfilePageInfo";
  pageInfo?: any | null;
  profiles?: ProfilePojo | null;
}
export type ProfilePageInfoViewName = "_base" | "_local" | "_minimal";
export type ProfilePageInfoView<V extends ProfilePageInfoViewName> = never;
