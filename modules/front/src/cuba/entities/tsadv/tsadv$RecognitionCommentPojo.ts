import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class RecognitionCommentPojo extends BaseUuidEntity {
  static NAME = "tsadv$RecognitionCommentPojo";
  author?: any | null;
  createDate?: string | null;
  text?: string | null;
  reverseText?: string | null;
  translated?: number | null;
  recognitionId?: any | null;
  parentCommentId?: any | null;
  parentCommentAuthor?: any | null;
}
export type RecognitionCommentPojoViewName = "_base" | "_local" | "_minimal";
export type RecognitionCommentPojoView<
  V extends RecognitionCommentPojoViewName
> = never;
