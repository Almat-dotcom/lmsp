import {CourseSectionFormat} from "../../../../cuba/enums/enums";
import React from "react";
import WebinarComponent from "./webinar/WebinarComponent";
import RemoteComponent from "./remote/RemoteComponent";

export const trainingBodyMap = new Map<string, React.ClassType<any, any, any>>();
trainingBodyMap.set(CourseSectionFormat.WEBINAR, WebinarComponent);
trainingBodyMap.set(CourseSectionFormat.OFFLINE, WebinarComponent);
trainingBodyMap.set(CourseSectionFormat.ONLINE, RemoteComponent);