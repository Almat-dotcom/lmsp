import { StandardEntity } from "../base/sys$StandardEntity";
import { Course } from "./tsadv$Course";
import { EnrollmentForTrainingRequest } from "./tsadv$EnrollmentForTrainingRequest";
export class TrainingRequest extends StandardEntity {
  static NAME = "tsadv$TrainingRequest";
  requestNumber?: string | null;
  learningType?: any | null;
  course?: Course | null;
  budget?: any | null;
  startDate?: any | null;
  endDate?: any | null;
  status?: number | null;
  enrollment?: EnrollmentForTrainingRequest[] | null;
}
export type TrainingRequestViewName = "_base" | "_local" | "_minimal";
export type TrainingRequestView<
  V extends TrainingRequestViewName
> = V extends "_base"
  ? Pick<
      TrainingRequest,
      "id" | "requestNumber" | "startDate" | "endDate" | "status"
    >
  : V extends "_local"
  ? Pick<
      TrainingRequest,
      "id" | "requestNumber" | "startDate" | "endDate" | "status"
    >
  : V extends "_minimal"
  ? Pick<TrainingRequest, "id" | "requestNumber">
  : never;
