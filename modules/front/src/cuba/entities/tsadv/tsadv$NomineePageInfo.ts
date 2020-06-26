import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
import { NomineePojo } from "./tsadv$NomineePojo";
export class NomineePageInfo extends BaseUuidEntity {
  static NAME = "tsadv$NomineePageInfo";
  pageInfo?: any | null;
  nominees?: NomineePojo | null;
}
export type NomineePageInfoViewName = "_base" | "_local" | "_minimal";
export type NomineePageInfoView<V extends NomineePageInfoViewName> = never;
