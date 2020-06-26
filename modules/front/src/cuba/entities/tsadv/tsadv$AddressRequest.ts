import { StandardEntity } from "../base/sys$StandardEntity";
import { FileDescriptor } from "../base/sys$FileDescriptor";
export class AddressRequest extends StandardEntity {
  static NAME = "tsadv$AddressRequest";
  addressType?: any | null;
  requestNumber?: any | null;
  address?: string | null;
  country?: any | null;
  postalCode?: string | null;
  city?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  attachment?: FileDescriptor | null;
  status?: any | null;
  baseAddress?: any | null;
  personGroup?: any | null;
}
export type AddressRequestViewName = "_base" | "_local" | "_minimal";
export type AddressRequestView<
  V extends AddressRequestViewName
> = V extends "_base"
  ? Pick<
      AddressRequest,
      | "id"
      | "requestNumber"
      | "address"
      | "postalCode"
      | "city"
      | "startDate"
      | "endDate"
    >
  : V extends "_local"
  ? Pick<
      AddressRequest,
      | "id"
      | "requestNumber"
      | "address"
      | "postalCode"
      | "city"
      | "startDate"
      | "endDate"
    >
  : never;
