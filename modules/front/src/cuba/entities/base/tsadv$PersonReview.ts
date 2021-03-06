import { AbstractParentEntity } from "./AbstractParentEntity";
import { PersonGroupExt } from "./base$PersonGroupExt";
export class PersonReview extends AbstractParentEntity {
  static NAME = "tsadv$PersonReview";
  author?: PersonGroupExt | null;
  text?: string | null;
  dateTime?: any | null;
  liking?: string | null;
  person?: PersonGroupExt | null;
}
export type PersonReviewViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "personReview.browse";
export type PersonReviewView<V extends PersonReviewViewName> = V extends "_base"
  ? Pick<PersonReview, "id" | "text" | "dateTime" | "liking" | "legacyID">
  : V extends "_local"
  ? Pick<PersonReview, "id" | "text" | "dateTime" | "liking" | "legacyID">
  : V extends "personReview.browse"
  ? Pick<
      PersonReview,
      "id" | "text" | "dateTime" | "liking" | "legacyID" | "author" | "person"
    >
  : never;
