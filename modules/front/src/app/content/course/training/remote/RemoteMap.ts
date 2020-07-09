import React from "react";
import {ContentType} from "../../../../../cuba/enums/enums";
import TrainingHtmlComponent from "../html/TrainingHtmlComponent";
import TrainingUrlComponent from "./TrainingUrlComponent";
import BlankComponent from "../../../../common/BlankComponent";

export const remoteMap = new Map<ContentType, React.ClassType<any, any, any>>();
remoteMap.set(ContentType.HTML, TrainingHtmlComponent);
remoteMap.set(ContentType.URL, TrainingUrlComponent);
remoteMap.set(ContentType.FILE, BlankComponent);
remoteMap.set(ContentType.PDF, BlankComponent);
remoteMap.set(ContentType.TEXT, BlankComponent);
remoteMap.set(ContentType.VIDEO, BlankComponent);