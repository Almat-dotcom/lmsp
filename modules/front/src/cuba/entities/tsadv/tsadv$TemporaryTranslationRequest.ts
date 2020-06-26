import { StandardEntity } from "../base/sys$StandardEntity";
import { FileDescriptor } from "../base/sys$FileDescriptor";
export class TemporaryTranslationRequest extends StandardEntity {
  static NAME = "tsadv$TemporaryTranslationRequest";
  requestNumber?: any | null;
  status?: any | null;
  personGroup?: any | null;
  startDate?: any | null;
  endDate?: any | null;
  positionGroup?: any | null;
  gradeGroup?: any | null;
  organizationGroup?: any | null;
  jobGroup?: any | null;
  note?: string | null;
  attachment?: FileDescriptor | null;
  substitutedEmployee?: any | null;
  reason?: string | null;
  actualPositionGroup?: any | null;
}
export type TemporaryTranslationRequestViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type TemporaryTranslationRequestView<
  V extends TemporaryTranslationRequestViewName
> = V extends "_base"
  ? Pick<
      TemporaryTranslationRequest,
      "id" | "requestNumber" | "startDate" | "endDate" | "note" | "reason"
    >
  : V extends "_local"
  ? Pick<
      TemporaryTranslationRequest,
      "id" | "requestNumber" | "startDate" | "endDate" | "note" | "reason"
    >
  : never;
