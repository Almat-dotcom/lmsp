import { StandardEntity } from "../base/sys$StandardEntity";
export class RecognitionComment extends StandardEntity {
  static NAME = "tsadv$RecognitionComment";
  text?: string | null;
  textEn?: string | null;
  textRu?: string | null;
  parentComment?: RecognitionComment | null;
  author?: any | null;
  recognition?: any | null;
}
export type RecognitionCommentViewName = "_base" | "_local" | "_minimal";
export type RecognitionCommentView<
  V extends RecognitionCommentViewName
> = V extends "_base"
  ? Pick<RecognitionComment, "id" | "text" | "textEn" | "textRu">
  : V extends "_local"
  ? Pick<RecognitionComment, "id" | "text" | "textEn" | "textRu">
  : never;