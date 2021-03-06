import { AbstractParentEntity } from "./AbstractParentEntity";
import { FileDescriptor } from "./sys$FileDescriptor";
import { ImportLog } from "./tsadv$ImportLog";
export class ImportScenario extends AbstractParentEntity {
  static NAME = "tsadv$ImportScenario";
  name?: string | null;
  template?: FileDescriptor | null;
  comment?: string | null;
  importerBeanName?: string | null;
  log?: ImportLog[] | null;
}
export type ImportScenarioViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "importScenario.view";
export type ImportScenarioView<
  V extends ImportScenarioViewName
> = V extends "_base"
  ? Pick<
      ImportScenario,
      "id" | "name" | "comment" | "importerBeanName" | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      ImportScenario,
      "id" | "name" | "comment" | "importerBeanName" | "legacyID"
    >
  : V extends "_minimal"
  ? Pick<ImportScenario, "id" | "name">
  : V extends "importScenario.view"
  ? Pick<
      ImportScenario,
      | "id"
      | "name"
      | "comment"
      | "importerBeanName"
      | "legacyID"
      | "template"
      | "log"
    >
  : never;
