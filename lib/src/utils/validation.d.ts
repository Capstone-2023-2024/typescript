import { CurrentUserRoleType } from "../types/user";
/** Strictly validates email with the domain used by BulSU. aka `@bulsu.edu.ph` */
declare const validateEmail: (email: string) => boolean;
/** If it returns faculty, there is a problem */
declare function recipientEscalation(role: CurrentUserRoleType): CurrentUserRoleType;
export { validateEmail, recipientEscalation };
