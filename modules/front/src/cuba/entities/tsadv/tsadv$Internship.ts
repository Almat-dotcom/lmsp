import { StandardEntity } from "../base/sys$StandardEntity";
import { InternshipExpenses } from "./tsadv$InternshipExpenses";
export class Internship extends StandardEntity {
  static NAME = "tsadv$Internship";
  personGroup?: any | null;
  comment?: string | null;
  internshipType?: any | null;
  school?: any | null;
  specialization?: string | null;
  reason?: string | null;
  agreementNumber?: string | null;
  agreementDate?: any | null;
  startDate?: any | null;
  endDate?: any | null;
  payable?: boolean | null;
  mainMentor?: any | null;
  mainMentorReason?: string | null;
  internshipRating?: any | null;
  internshipReason?: string | null;
  organizationGroup?: any | null;
  internshipExpenses?: InternshipExpenses[] | null;
  orderDate?: any | null;
  mentorOrderDate?: any | null;
}
export type InternshipViewName = "_base" | "_local" | "_minimal";
export type InternshipView<V extends InternshipViewName> = V extends "_base"
  ? Pick<
      Internship,
      | "id"
      | "comment"
      | "specialization"
      | "reason"
      | "agreementNumber"
      | "agreementDate"
      | "startDate"
      | "endDate"
      | "payable"
      | "mainMentorReason"
      | "internshipReason"
      | "orderDate"
      | "mentorOrderDate"
    >
  : V extends "_local"
  ? Pick<
      Internship,
      | "id"
      | "comment"
      | "specialization"
      | "reason"
      | "agreementNumber"
      | "agreementDate"
      | "startDate"
      | "endDate"
      | "payable"
      | "mainMentorReason"
      | "internshipReason"
      | "orderDate"
      | "mentorOrderDate"
    >
  : never;
