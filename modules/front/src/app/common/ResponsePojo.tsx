export interface ResponsePojo {
    status : ResponsePojoStatus,
    message: string,
}
export enum ResponsePojoStatus {
    SUCCESS = "SUCCESS",
    ERROR = "ERROR"
}
