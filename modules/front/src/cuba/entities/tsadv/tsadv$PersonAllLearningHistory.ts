import { StandardEntity } from "../base/sys$StandardEntity";
export class PersonAllLearningHistory extends StandardEntity {
  static NAME = "tsadv$PersonAllLearningHistory";
  personGroup?: any | null;
  course?: any | null;
  courseName?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  type?: string | null;
}
export type PersonAllLearningHistoryViewName = "_base" | "_local" | "_minimal";
export type PersonAllLearningHistoryView<
  V extends PersonAllLearningHistoryViewName
> = V extends "_base"
  ? Pick<
      PersonAllLearningHistory,
      "id" | "courseName" | "startDate" | "endDate" | "type"
    >
  : V extends "_local"
  ? Pick<
      PersonAllLearningHistory,
      "id" | "courseName" | "startDate" | "endDate" | "type"
    >
  : V extends "_minimal"
  ? Pick<PersonAllLearningHistory, "id" | "courseName" | "startDate">
  : never;
