import { StandardEntity } from "../base/sys$StandardEntity";
export class RecognitionQuality extends StandardEntity {
  static NAME = "tsadv$RecognitionQuality";
  recognition?: any | null;
  quality?: any | null;
}
export type RecognitionQualityViewName = "_base" | "_local" | "_minimal";
export type RecognitionQualityView<
  V extends RecognitionQualityViewName
> = never;
