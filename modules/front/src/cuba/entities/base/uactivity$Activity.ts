import { AbstractParentEntity } from "./AbstractParentEntity";
import { ActivityType } from "./uactivity$ActivityType";
import { NotificationTemplate } from "./base$NotificationTemplate";
import { SendingNotification } from "./base$SendingNotification";
import { Priority } from "./uactivity$Priority";
import { User } from "./sec$User";
export class Activity extends AbstractParentEntity {
  static NAME = "uactivity$Activity";
  nameRu?: string | null;
  nameKz?: string | null;
  nameEn?: string | null;
  name?: string | null;
  type?: ActivityType | null;
  referenceId?: any | null;
  notificationTemplate?: NotificationTemplate | null;
  notificationTemplateCode?: string | null;
  sendingNotification?: SendingNotification | null;
  description?: string | null;
  priority?: Priority | null;
  allDay?: boolean | null;
  startDateTime?: any | null;
  endDateTime?: any | null;
  status?: any | null;
  assignedUser?: User | null;
  assignedBy?: User | null;
  reference?: string | null;
  eventColor?: string | null;
  notificationHeaderRu?: string | null;
  notificationHeaderKz?: string | null;
  notificationHeaderEn?: string | null;
  notificationHeader?: string | null;
  notificationBodyRu?: string | null;
  notificationBodyKz?: string | null;
  notificationBodyEn?: string | null;
  notificationBody?: string | null;
}
export type ActivityViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "activity-source-open"
  | "activity-two-tabs-browse"
  | "activity-view"
  | "activity.view"
  | "activity.view.tsadv";
export type ActivityView<V extends ActivityViewName> = V extends "_base"
  ? Pick<
      Activity,
      | "id"
      | "nameRu"
      | "nameKz"
      | "nameEn"
      | "referenceId"
      | "notificationTemplateCode"
      | "description"
      | "allDay"
      | "startDateTime"
      | "endDateTime"
      | "status"
      | "reference"
      | "eventColor"
      | "notificationHeaderRu"
      | "notificationHeaderKz"
      | "notificationHeaderEn"
      | "notificationBodyRu"
      | "notificationBodyKz"
      | "notificationBodyEn"
      | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      Activity,
      | "id"
      | "nameRu"
      | "nameKz"
      | "nameEn"
      | "referenceId"
      | "notificationTemplateCode"
      | "description"
      | "allDay"
      | "startDateTime"
      | "endDateTime"
      | "status"
      | "reference"
      | "eventColor"
      | "notificationHeaderRu"
      | "notificationHeaderKz"
      | "notificationHeaderEn"
      | "notificationBodyRu"
      | "notificationBodyKz"
      | "notificationBodyEn"
      | "legacyID"
    >
  : V extends "_minimal"
  ? Pick<Activity, "id" | "nameRu">
  : V extends "activity-source-open"
  ? Pick<
      Activity,
      | "id"
      | "nameRu"
      | "nameKz"
      | "nameEn"
      | "referenceId"
      | "notificationTemplateCode"
      | "description"
      | "allDay"
      | "startDateTime"
      | "endDateTime"
      | "status"
      | "reference"
      | "eventColor"
      | "notificationHeaderRu"
      | "notificationHeaderKz"
      | "notificationHeaderEn"
      | "notificationBodyRu"
      | "notificationBodyKz"
      | "notificationBodyEn"
      | "legacyID"
      | "type"
    >
  : V extends "activity-two-tabs-browse"
  ? Pick<
      Activity,
      | "id"
      | "nameRu"
      | "nameKz"
      | "nameEn"
      | "referenceId"
      | "notificationTemplateCode"
      | "description"
      | "allDay"
      | "startDateTime"
      | "endDateTime"
      | "status"
      | "reference"
      | "eventColor"
      | "notificationHeaderRu"
      | "notificationHeaderKz"
      | "notificationHeaderEn"
      | "notificationBodyRu"
      | "notificationBodyKz"
      | "notificationBodyEn"
      | "legacyID"
      | "name"
      | "type"
      | "priority"
      | "assignedUser"
      | "assignedBy"
      | "notificationHeader"
      | "notificationBody"
    >
  : V extends "activity-view"
  ? Pick<
      Activity,
      | "id"
      | "nameRu"
      | "nameKz"
      | "nameEn"
      | "referenceId"
      | "notificationTemplateCode"
      | "description"
      | "allDay"
      | "startDateTime"
      | "endDateTime"
      | "status"
      | "reference"
      | "eventColor"
      | "notificationHeaderRu"
      | "notificationHeaderKz"
      | "notificationHeaderEn"
      | "notificationBodyRu"
      | "notificationBodyKz"
      | "notificationBodyEn"
      | "legacyID"
      | "type"
      | "priority"
      | "assignedUser"
      | "assignedBy"
      | "createTs"
    >
  : V extends "activity.view"
  ? Pick<
      Activity,
      | "id"
      | "nameRu"
      | "nameKz"
      | "nameEn"
      | "referenceId"
      | "notificationTemplateCode"
      | "description"
      | "allDay"
      | "startDateTime"
      | "endDateTime"
      | "status"
      | "reference"
      | "eventColor"
      | "notificationHeaderRu"
      | "notificationHeaderKz"
      | "notificationHeaderEn"
      | "notificationBodyRu"
      | "notificationBodyKz"
      | "notificationBodyEn"
      | "legacyID"
      | "type"
      | "priority"
      | "assignedUser"
      | "assignedBy"
      | "createTs"
      | "createdBy"
      | "updateTs"
      | "updatedBy"
    >
  : V extends "activity.view.tsadv"
  ? Pick<
      Activity,
      | "id"
      | "nameRu"
      | "nameKz"
      | "nameEn"
      | "referenceId"
      | "notificationTemplateCode"
      | "description"
      | "allDay"
      | "startDateTime"
      | "endDateTime"
      | "status"
      | "reference"
      | "eventColor"
      | "notificationHeaderRu"
      | "notificationHeaderKz"
      | "notificationHeaderEn"
      | "notificationBodyRu"
      | "notificationBodyKz"
      | "notificationBodyEn"
      | "legacyID"
      | "type"
      | "sendingNotification"
      | "priority"
      | "assignedUser"
      | "assignedBy"
      | "createTs"
    >
  : never;
