import { StandardEntity } from "../base/sys$StandardEntity";
export class GradeSsView extends StandardEntity {
  static NAME = "tsadv$GradeSsView";
  startDate?: any | null;
  endDate?: any | null;
  gradeGroup?: any | null;
  gradeName?: string | null;
  maxStartDate?: any | null;
}
export type GradeSsViewViewName = "_base" | "_local" | "_minimal";
export type GradeSsViewView<V extends GradeSsViewViewName> = V extends "_base"
  ? Pick<
      GradeSsView,
      "id" | "startDate" | "endDate" | "gradeName" | "maxStartDate"
    >
  : V extends "_local"
  ? Pick<
      GradeSsView,
      "id" | "startDate" | "endDate" | "gradeName" | "maxStartDate"
    >
  : never;
