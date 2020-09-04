import React from "react";
import DescriptionComponent from "./DescriptionComponent";
import DescriptionAuthorDsComponent from "./author/DescriptionAuthorDsComponent";

export const descriptionItems = new Map<string, React.ClassType<any, any, any>>();
descriptionItems.set("description", DescriptionComponent);
descriptionItems.set("author", DescriptionAuthorDsComponent);