import { StandardEntity } from "../base/sys$StandardEntity";
export class LearnerGroup extends StandardEntity {
  static NAME = "tsadv$LearnerGroup";
  code?: string | null;
  active?: boolean | null;
  description?: string | null;
}
export type LearnerGroupViewName = "_base" | "_local" | "_minimal";
export type LearnerGroupView<V extends LearnerGroupViewName> = V extends "_base"
  ? Pick<LearnerGroup, "id" | "code" | "active" | "description">
  : V extends "_local"
  ? Pick<LearnerGroup, "id" | "code" | "active" | "description">
  : V extends "_minimal"
  ? Pick<LearnerGroup, "id" | "code">
  : never;
