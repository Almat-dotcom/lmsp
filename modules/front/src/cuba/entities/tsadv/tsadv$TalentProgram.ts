import { StandardEntity } from "../base/sys$StandardEntity";
import { FileDescriptor } from "../base/sys$FileDescriptor";
export class TalentProgram extends StandardEntity {
  static NAME = "tsadv$TalentProgram";
  programNameLang1?: string | null;
  essayRequirementLang1?: string | null;
  essayRequirementLang2?: string | null;
  essayRequirementLang3?: string | null;
  essayRequirementLang?: string | null;
  programNameLang?: string | null;
  bannerLang?: FileDescriptor | null;
  participationRuleLang?: string | null;
  programNameLang2?: string | null;
  programNameLang3?: string | null;
  isActive?: boolean | null;
  startDate?: any | null;
  endDate?: any | null;
  participationRuleLang1?: string | null;
  participationRuleLang2?: string | null;
  participationRuleLang3?: string | null;
  bannerLang1?: FileDescriptor | null;
  bannerLang2?: FileDescriptor | null;
  bannerLang3?: FileDescriptor | null;
  webLink?: string | null;
  questionOfEssayRu?: string | null;
  questionOfEssayKz?: string | null;
  questionOfEssayEn?: string | null;
  questionOfEssay?: string | null;
}
export type TalentProgramViewName = "_base" | "_local" | "_minimal";
export type TalentProgramView<
  V extends TalentProgramViewName
> = V extends "_base"
  ? Pick<
      TalentProgram,
      | "id"
      | "programNameLang"
      | "programNameLang1"
      | "essayRequirementLang1"
      | "essayRequirementLang2"
      | "essayRequirementLang3"
      | "programNameLang2"
      | "programNameLang3"
      | "isActive"
      | "startDate"
      | "endDate"
      | "participationRuleLang1"
      | "participationRuleLang2"
      | "participationRuleLang3"
      | "webLink"
      | "questionOfEssayRu"
      | "questionOfEssayKz"
      | "questionOfEssayEn"
      | "questionOfEssay"
    >
  : V extends "_local"
  ? Pick<
      TalentProgram,
      | "id"
      | "programNameLang1"
      | "essayRequirementLang1"
      | "essayRequirementLang2"
      | "essayRequirementLang3"
      | "programNameLang2"
      | "programNameLang3"
      | "isActive"
      | "startDate"
      | "endDate"
      | "participationRuleLang1"
      | "participationRuleLang2"
      | "participationRuleLang3"
      | "webLink"
      | "questionOfEssayRu"
      | "questionOfEssayKz"
      | "questionOfEssayEn"
      | "questionOfEssay"
    >
  : V extends "_minimal"
  ? Pick<TalentProgram, "id" | "programNameLang">
  : never;
