import { StandardEntity } from "../base/sys$StandardEntity";
export class RecognitionLike extends StandardEntity {
  static NAME = "tsadv$RecognitionLike";
  personGroup?: any | null;
  recognition?: any | null;
}
export type RecognitionLikeViewName = "_base" | "_local" | "_minimal";
export type RecognitionLikeView<V extends RecognitionLikeViewName> = never;
