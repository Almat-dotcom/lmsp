import {CourseSectionFormat} from "../../../../cuba/enums/enums";

export const trainingBodyPropsMap = new Map<CourseSectionFormat, string>();
trainingBodyPropsMap.set(CourseSectionFormat.WEBINAR, "session");
trainingBodyPropsMap.set(CourseSectionFormat.OFFLINE, "session");
trainingBodyPropsMap.set(CourseSectionFormat.ONLINE, "sectionObject");