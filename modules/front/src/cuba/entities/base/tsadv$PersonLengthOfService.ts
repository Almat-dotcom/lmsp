import { AbstractParentEntity } from "./AbstractParentEntity";
import { PersonGroupExt } from "./base$PersonGroupExt";
import { DicLengthOfServiceType } from "./tsadv$DicLengthOfServiceType";
import { DicLengthOfServiceRange } from "./tsadv$DicLengthOfServiceRange";
export class PersonLengthOfService extends AbstractParentEntity {
  static NAME = "tsadv$PersonLengthOfService";
  personGroup?: PersonGroupExt | null;
  lengthOfServiceType?: DicLengthOfServiceType | null;
  range?: DicLengthOfServiceRange | null;
  effectiveDate?: any | null;
  value?: any | null;
}
export type PersonLengthOfServiceViewName = "_base" | "_local" | "_minimal";
export type PersonLengthOfServiceView<
  V extends PersonLengthOfServiceViewName
> = V extends "_base"
  ? Pick<
      PersonLengthOfService,
      "id" | "personGroup" | "range" | "effectiveDate" | "value" | "legacyID"
    >
  : V extends "_local"
  ? Pick<PersonLengthOfService, "id" | "effectiveDate" | "value" | "legacyID">
  : V extends "_minimal"
  ? Pick<PersonLengthOfService, "id" | "personGroup" | "range">
  : never;
