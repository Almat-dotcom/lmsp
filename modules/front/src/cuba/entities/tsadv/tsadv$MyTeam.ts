import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class MyTeam extends BaseUuidEntity {
  static NAME = "tsadv$MyTeam";
  personGroup?: any | null;
  positionGroup?: any | null;
  parentPersonGroup?: any | null;
  parent?: MyTeam | null;
  personPath?: string | null;
  managerFlag?: boolean | null;
  fioWithEmployeeNumber?: string | null;
}
export type MyTeamViewName = "_base" | "_local" | "_minimal";
export type MyTeamView<V extends MyTeamViewName> = V extends "_base"
  ? Pick<MyTeam, "id" | "personPath" | "managerFlag" | "fioWithEmployeeNumber">
  : V extends "_local"
  ? Pick<MyTeam, "id" | "personPath" | "managerFlag" | "fioWithEmployeeNumber">
  : never;
