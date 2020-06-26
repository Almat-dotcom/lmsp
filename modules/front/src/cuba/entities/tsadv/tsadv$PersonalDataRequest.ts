import { StandardEntity } from "../base/sys$StandardEntity";
import { FileDescriptor } from "../base/sys$FileDescriptor";
export class PersonalDataRequest extends StandardEntity {
  static NAME = "tsadv$PersonalDataRequest";
  lastName?: string | null;
  requestNumber?: any | null;
  firstName?: string | null;
  middleName?: string | null;
  lastNameLatin?: string | null;
  firstNameLatin?: string | null;
  middleNameLatin?: string | null;
  maritalStatus?: any | null;
  dateOfBirth?: any | null;
  attachment?: FileDescriptor | null;
  status?: any | null;
  personGroup?: any | null;
  attachments?: FileDescriptor[] | null;
}
export type PersonalDataRequestViewName = "_base" | "_local" | "_minimal";
export type PersonalDataRequestView<
  V extends PersonalDataRequestViewName
> = V extends "_base"
  ? Pick<
      PersonalDataRequest,
      | "id"
      | "lastName"
      | "requestNumber"
      | "firstName"
      | "middleName"
      | "lastNameLatin"
      | "firstNameLatin"
      | "middleNameLatin"
      | "dateOfBirth"
    >
  : V extends "_local"
  ? Pick<
      PersonalDataRequest,
      | "id"
      | "lastName"
      | "requestNumber"
      | "firstName"
      | "middleName"
      | "lastNameLatin"
      | "firstNameLatin"
      | "middleNameLatin"
      | "dateOfBirth"
    >
  : never;
