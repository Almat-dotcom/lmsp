import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
import { RecognitionPojo } from "./tsadv$RecognitionPojo";
export class RecognitionPageInfo extends BaseUuidEntity {
  static NAME = "tsadv$RecognitionPageInfo";
  pageInfo?: any | null;
  recognitions?: RecognitionPojo | null;
}
export type RecognitionPageInfoViewName = "_base" | "_local" | "_minimal";
export type RecognitionPageInfoView<
  V extends RecognitionPageInfoViewName
> = never;
