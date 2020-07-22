import {AbstractParentEntity} from "../base/uco/AbstractParentEntity";
import {Course} from "./tsadv$Course";
import {LearningObject} from "./tsadv$LearningObject";

export class Test extends AbstractParentEntity {
  static NAME = "tsadv$Test";

  name: string;
  description?: string;
  // type: DicTestType;
  active: boolean;
  maxAttempt: number;
  daysBetweenAttempts: number;
  timer: number;
  sectionOrder: number;
  instruction: number;
  targetScore: number;
  showResults: number;
  // sections: Array<TestSection>;
  showSectionNewPage: boolean;
  // jobTest: Array<JobTest>;
  // positionTest: Array<PositionTest>;
  course: Course;
  objectType?: any | null = null;
  content?: LearningObject | null = null;
  test?: any | null = null;
}

export type TestViewName = "_base" | "_local" | "_minimal";