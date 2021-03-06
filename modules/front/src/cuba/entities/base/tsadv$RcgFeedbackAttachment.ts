import { AbstractParentEntity } from "./AbstractParentEntity";
import { FileDescriptor } from "./sys$FileDescriptor";
import { RcgFeedback } from "./tsadv$RcgFeedback";
export class RcgFeedbackAttachment extends AbstractParentEntity {
  static NAME = "tsadv$RcgFeedbackAttachment";
  file?: FileDescriptor | null;
  rcgFeedback?: RcgFeedback | null;
}
export type RcgFeedbackAttachmentViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "rcgFeedbackAttachment.edit";
export type RcgFeedbackAttachmentView<
  V extends RcgFeedbackAttachmentViewName
> = V extends "_base"
  ? Pick<RcgFeedbackAttachment, "id" | "legacyID">
  : V extends "_local"
  ? Pick<RcgFeedbackAttachment, "id" | "legacyID">
  : V extends "rcgFeedbackAttachment.edit"
  ? Pick<RcgFeedbackAttachment, "id" | "legacyID" | "file">
  : never;
