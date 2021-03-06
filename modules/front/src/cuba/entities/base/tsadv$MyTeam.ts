import { BaseUuidEntity } from "./sys$BaseUuidEntity";
import { PersonGroupExt } from "./base$PersonGroupExt";
import { PositionGroupExt } from "./base$PositionGroupExt";
export class MyTeam extends BaseUuidEntity {
  static NAME = "tsadv$MyTeam";
  personGroup?: PersonGroupExt | null;
  positionGroup?: PositionGroupExt | null;
  parentPersonGroup?: PersonGroupExt | null;
  parent?: MyTeam | null;
  personPath?: string | null;
  managerFlag?: boolean | null;
  fioWithEmployeeNumber?: string | null;
}
export type MyTeamViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "myTeam-parent.view"
  | "myTeam.view";
export type MyTeamView<V extends MyTeamViewName> = V extends "_base"
  ? Pick<MyTeam, "id" | "personPath" | "managerFlag" | "fioWithEmployeeNumber">
  : V extends "_local"
  ? Pick<MyTeam, "id" | "personPath" | "managerFlag" | "fioWithEmployeeNumber">
  : V extends "myTeam-parent.view"
  ? Pick<
      MyTeam,
      | "id"
      | "personPath"
      | "managerFlag"
      | "fioWithEmployeeNumber"
      | "personGroup"
      | "positionGroup"
      | "parent"
    >
  : V extends "myTeam.view"
  ? Pick<
      MyTeam,
      | "id"
      | "personPath"
      | "managerFlag"
      | "fioWithEmployeeNumber"
      | "personGroup"
      | "positionGroup"
      | "parent"
      | "fioWithEmployeeNumber"
    >
  : never;
