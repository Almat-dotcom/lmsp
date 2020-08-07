import React from "react";
import {ContentType} from "../../../../../cuba/enums/enums";
import TrainingHtmlComponent from "../html/TrainingHtmlComponent";
import DescriptionComponent from "./DescriptionComponent";
import DescriptionSectionsComponent from "./DescriptionSectionsComponent";
import DescriptionAuthorComponent from "./DescriptionAuthorComponent";

export const descriptionItems = new Map<string, React.ClassType<any, any, any>>();
descriptionItems.set("description", DescriptionComponent);
descriptionItems.set("sections", DescriptionSectionsComponent);
descriptionItems.set("author", DescriptionAuthorComponent);