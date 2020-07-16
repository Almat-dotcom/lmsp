import React from "react";
import {ContentType} from "../../../../../cuba/enums/enums";
import TrainingHtmlComponent from "../html/TrainingHtmlComponent";
import TrainingUrlComponent from "./TrainingUrlComponent";
import BlankComponent from "../../../../common/BlankComponent";
import TrainingVideoComponent from "./TrainingVideoComponent";
import TrainingPdfComponent from "./TrainingPdfComponent";
import TrainingTextComponent from "./TrainingTextComponent";

export const remoteMap = new Map<ContentType, React.ClassType<any, any, any>>();
remoteMap.set(ContentType.HTML, TrainingHtmlComponent);
remoteMap.set(ContentType.URL, TrainingUrlComponent);
remoteMap.set(ContentType.FILE, TrainingPdfComponent);
remoteMap.set(ContentType.PDF, TrainingPdfComponent);
remoteMap.set(ContentType.TEXT, TrainingTextComponent);
remoteMap.set(ContentType.VIDEO, TrainingVideoComponent);