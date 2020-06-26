import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class RcgFeedbackCommentPojo extends BaseUuidEntity {
  static NAME = "tsadv$RcgFeedbackCommentPojo";
  author?: any | null;
  createDate?: string | null;
  text?: string | null;
  reverseText?: string | null;
  translated?: number | null;
  feedbackId?: any | null;
  parentCommentId?: any | null;
  parentCommentAuthor?: any | null;
}
export type RcgFeedbackCommentPojoViewName = "_base" | "_local" | "_minimal";
export type RcgFeedbackCommentPojoView<
  V extends RcgFeedbackCommentPojoViewName
> = never;
