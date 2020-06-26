import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
import { RcgFeedbackPojo } from "./tsadv$RcgFeedbackPojo";
export class RcgFeedbackPageInfo extends BaseUuidEntity {
  static NAME = "tsadv$RcgFeedbackPageInfo";
  pageInfo?: any | null;
  feedback?: RcgFeedbackPojo | null;
}
export type RcgFeedbackPageInfoViewName = "_base" | "_local" | "_minimal";
export type RcgFeedbackPageInfoView<
  V extends RcgFeedbackPageInfoViewName
> = never;
