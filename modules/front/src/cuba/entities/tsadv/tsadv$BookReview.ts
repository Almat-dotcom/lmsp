import { StandardEntity } from "../base/sys$StandardEntity";
import { Book } from "./tsadv$Book";
export class BookReview extends StandardEntity {
  static NAME = "tsadv$BookReview";
  book?: Book | null;
  author?: any | null;
  postDate?: any | null;
  reviewText?: string | null;
  rating?: any | null;
}
export type BookReviewViewName = "_base" | "_local" | "_minimal";
export type BookReviewView<V extends BookReviewViewName> = V extends "_base"
  ? Pick<
      BookReview,
      "id" | "book" | "author" | "postDate" | "reviewText" | "rating"
    >
  : V extends "_local"
  ? Pick<BookReview, "id" | "postDate" | "reviewText" | "rating">
  : V extends "_minimal"
  ? Pick<BookReview, "id" | "book" | "author" | "postDate">
  : never;
