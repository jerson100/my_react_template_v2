import { PermissionsE } from "../consts";

export type InitiativeType = {
  title:string,
  description:string,
  project:string,
  to:string,
  permission:PermissionsE
}