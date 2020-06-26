import { StandardEntity } from "../base/sys$StandardEntity";
export class RecognitionProfileSetting extends StandardEntity {
  static NAME = "tsadv$RecognitionProfileSetting";
  automaticTranslate?: boolean | null;
  personGroup?: any | null;
}
export type RecognitionProfileSettingViewName = "_base" | "_local" | "_minimal";
export type RecognitionProfileSettingView<
  V extends RecognitionProfileSettingViewName
> = V extends "_base"
  ? Pick<RecognitionProfileSetting, "id" | "automaticTranslate">
  : V extends "_local"
  ? Pick<RecognitionProfileSetting, "id" | "automaticTranslate">
  : never;
