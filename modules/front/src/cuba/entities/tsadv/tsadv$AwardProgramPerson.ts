import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class AwardProgramPerson extends BaseUuidEntity {
  static NAME = "tsadv$AwardProgramPerson";
  person?: any | null;
  awardProgram?: any | null;
  count?: any | null;
}
export type AwardProgramPersonViewName = "_base" | "_local" | "_minimal";
export type AwardProgramPersonView<
  V extends AwardProgramPersonViewName
> = never;
