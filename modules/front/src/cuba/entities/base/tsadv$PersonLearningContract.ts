import { AbstractParentEntity } from "./AbstractParentEntity";
import { PersonGroupExt } from "./base$PersonGroupExt";
import { LearningExpense } from "./tsadv$LearningExpense";
export class PersonLearningContract extends AbstractParentEntity {
  static NAME = "tsadv$PersonLearningContract";
  personGroup?: PersonGroupExt | null;
  learningExpense?: LearningExpense[] | null;
  contractNumber?: string | null;
  contractDate?: any | null;
  termOfService?: any | null;
  other?: string | null;
}
export type PersonLearningContractViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "personLearningContract-for-learninexpense"
  | "personLearningContract.edit";
export type PersonLearningContractView<
  V extends PersonLearningContractViewName
> = V extends "_base"
  ? Pick<
      PersonLearningContract,
      | "id"
      | "contractNumber"
      | "contractDate"
      | "termOfService"
      | "other"
      | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      PersonLearningContract,
      | "id"
      | "contractNumber"
      | "contractDate"
      | "termOfService"
      | "other"
      | "legacyID"
    >
  : V extends "personLearningContract-for-learninexpense"
  ? Pick<
      PersonLearningContract,
      "id" | "personGroup" | "contractNumber" | "contractDate" | "termOfService"
    >
  : V extends "personLearningContract.edit"
  ? Pick<
      PersonLearningContract,
      | "id"
      | "contractNumber"
      | "contractDate"
      | "termOfService"
      | "other"
      | "legacyID"
      | "personGroup"
    >
  : never;
