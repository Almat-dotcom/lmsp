import { AbstractParentEntity } from "./AbstractParentEntity";
import { ScaleLevel } from "./tsadv$ScaleLevel";
export class Scale extends AbstractParentEntity {
  static NAME = "tsadv$Scale";
  scaleName?: string | null;
  scaleLevels?: ScaleLevel[] | null;
}
export type ScaleViewName = "_base" | "_local" | "_minimal" | "scale-view";
export type ScaleView<V extends ScaleViewName> = V extends "_base"
  ? Pick<Scale, "id" | "scaleName" | "legacyID">
  : V extends "_local"
  ? Pick<Scale, "id" | "scaleName" | "legacyID">
  : V extends "_minimal"
  ? Pick<Scale, "id" | "scaleName">
  : V extends "scale-view"
  ? Pick<Scale, "id" | "scaleName" | "legacyID" | "scaleLevels">
  : never;
