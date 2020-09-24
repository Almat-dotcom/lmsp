import { StandardEntity } from "./sys$StandardEntity";
import { FileDescriptor } from "./sys$FileDescriptor";
import { LmsSlider } from "./tsadv$LmsSlider";
import {SerializedEntityProps} from "@cuba-platform/rest";
export class LmsSliderImage extends StandardEntity implements SerializedEntityProps{
  static NAME = "tsadv$LmsSliderImage";
  image?: FileDescriptor | null;
  order?: number | null;
  slider?: LmsSlider | null;
  _entityName: string;
  _instanceName: string;
  createTs: any | null;
  createdBy: string | null;
  deleteTs: any | null;
  deletedBy: string | null;
  id: string;
  updateTs: any | null;
  updatedBy: string | null;
  version: number | null;
}
export type LmsSliderImageViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "lmsSliderImage.with.image";
export type LmsSliderImageView<
  V extends LmsSliderImageViewName
> = V extends "_base"
  ? Pick<LmsSliderImage, "id" | "order">
  : V extends "_local"
  ? Pick<LmsSliderImage, "id" | "order">
  : V extends "lmsSliderImage.with.image"
  ? Pick<LmsSliderImage, "id" | "order" | "image">
  : never;
