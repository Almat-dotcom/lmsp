import { AbstractGroup } from "./AbstractGroup";
export class EmptyGroup extends AbstractGroup {
  static NAME = "base$EmptyGroup";
}
export type EmptyGroupViewName = "_base" | "_local" | "_minimal";
export type EmptyGroupView<V extends EmptyGroupViewName> = V extends "_base"
  ? Pick<EmptyGroup, "id" | "legacyID">
  : V extends "_local"
  ? Pick<EmptyGroup, "id" | "legacyID">
  : never;
