import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class MyTeamNew extends BaseUuidEntity {
  static NAME = "tsadv$MyTeamNew";
  parent?: MyTeamNew | null;
  personGroupId?: any | null;
  positionGroupId?: any | null;
  fullName?: string | null;
  organizationNameLang1?: string | null;
  positionNameLang1?: string | null;
  gradeName?: string | null;
  linkEnabled?: boolean | null;
  hasChild?: boolean | null;
}
export type MyTeamNewViewName = "_base" | "_local" | "_minimal";
export type MyTeamNewView<V extends MyTeamNewViewName> = V extends "_base"
  ? Pick<MyTeamNew, "id">
  : V extends "_minimal"
  ? Pick<MyTeamNew, "id">
  : never;
