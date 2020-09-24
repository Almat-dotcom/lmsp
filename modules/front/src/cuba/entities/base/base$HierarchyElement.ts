import { AbstractParentEntity } from "./AbstractParentEntity";
import { Hierarchy } from "./base$Hierarchy";
export class HierarchyElement extends AbstractParentEntity {
  static NAME = "base$HierarchyElement";
  elementType?: any | null;
  hierarchy?: Hierarchy | null;
  startDate?: any | null;
  endDate?: any | null;
  parentName?: string | null;
  doNotCopy?: boolean | null;
}
export type HierarchyElementViewName = "_base" | "_local" | "_minimal";
export type HierarchyElementView<
  V extends HierarchyElementViewName
> = V extends "_base"
  ? Pick<
      HierarchyElement,
      "id" | "elementType" | "startDate" | "endDate" | "doNotCopy" | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      HierarchyElement,
      "id" | "elementType" | "startDate" | "endDate" | "doNotCopy" | "legacyID"
    >
  : V extends "_minimal"
  ? Pick<HierarchyElement, "id">
  : never;
