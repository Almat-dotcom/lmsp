import { StandardEntity } from "./sys$StandardEntity";
export class ReportGroup extends StandardEntity {
  static NAME = "report$ReportGroup";
  title?: string | null;
  code?: string | null;
  localeNames?: string | null;
  locName?: string | null;
  systemFlag?: boolean | null;
}
export type ReportGroupViewName = "_base" | "_local" | "_minimal";
export type ReportGroupView<V extends ReportGroupViewName> = V extends "_base"
  ? Pick<
      ReportGroup,
      "id" | "title" | "localeNames" | "code" | "locName" | "systemFlag"
    >
  : V extends "_local"
  ? Pick<
      ReportGroup,
      "id" | "title" | "code" | "localeNames" | "locName" | "systemFlag"
    >
  : V extends "_minimal"
  ? Pick<ReportGroup, "id" | "title" | "localeNames">
  : never;
