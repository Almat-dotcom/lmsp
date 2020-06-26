import { AbstractParentEntity } from "./AbstractParentEntity";
export class AbstractCisAddress extends AbstractParentEntity {
  country?: any | null;
  region?: any | null;
  city?: any | null;
  cityDistrict?: any | null;
  street?: string | null;
  house?: string | null;
  apartment?: string | null;
  additionalInformationLang1?: string | null;
  additionalInformationLang2?: string | null;
  additionalInformationLang3?: string | null;
  additionalInformationLang4?: string | null;
  additionalInformationLang5?: string | null;
}
