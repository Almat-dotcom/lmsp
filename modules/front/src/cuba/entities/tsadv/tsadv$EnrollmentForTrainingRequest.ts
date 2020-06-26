import { StandardEntity } from "../base/sys$StandardEntity";
import { TrainingRequest } from "./tsadv$TrainingRequest";
export class EnrollmentForTrainingRequest extends StandardEntity {
  static NAME = "tsadv$EnrollmentForTrainingRequest";
  reason?: string | null;
  personGroup?: any | null;
  status?: number | null;
  date?: any | null;
  moneyInBudget?: boolean | null;
  trainingRequest?: TrainingRequest | null;
}
export type EnrollmentForTrainingRequestViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type EnrollmentForTrainingRequestView<
  V extends EnrollmentForTrainingRequestViewName
> = V extends "_base"
  ? Pick<
      EnrollmentForTrainingRequest,
      "id" | "reason" | "status" | "date" | "moneyInBudget"
    >
  : V extends "_local"
  ? Pick<
      EnrollmentForTrainingRequest,
      "id" | "reason" | "status" | "date" | "moneyInBudget"
    >
  : never;
