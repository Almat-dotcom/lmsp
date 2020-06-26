import { StandardEntity } from "../base/sys$StandardEntity";
import { Course } from "./tsadv$Course";
export class CourseReview extends StandardEntity {
  static NAME = "tsadv$CourseReview";
  course?: Course | null;
  personGroup?: any | null;
  rate?: any | null;
  text?: string | null;
}
export type CourseReviewViewName = "_base" | "_local" | "_minimal";
export type CourseReviewView<V extends CourseReviewViewName> = V extends "_base"
  ? Pick<CourseReview, "id" | "rate" | "text">
  : V extends "_local"
  ? Pick<CourseReview, "id" | "rate" | "text">
  : never;
