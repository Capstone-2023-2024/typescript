import type { DateFileProps } from "./document";
import { RoleWithAdmin } from "./permission";
type CurrentUserRoleType = "student" | "mayor" | "faculty" | "adviser" | RoleWithAdmin;
type SectionType = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";
interface UserBaseProps {
    email: string;
    name: string;
}
interface ClassSectionProps {
    yearLevel: string;
    section?: SectionType;
}
interface StudentInfoProps extends ClassSectionProps, DateFileProps, UserBaseProps {
    studentNo: string;
    college: string;
    gender: string;
    schoolYear: string;
    course: string;
    major: string;
    curriculum: string;
    age: string;
    scholarship: string;
    src?: string;
}
interface MayorInfoProps extends Pick<StudentInfoProps, "studentNo">, ClassSectionProps, DateFileProps, UserBaseProps {
}
interface AdviserInfoProps extends ClassSectionProps, DateFileProps, Pick<UserBaseProps, "email"> {
    name?: string;
}
interface FacultyInfoProps extends DateFileProps, UserBaseProps {
}
interface StudentNameResultProps extends Pick<StudentInfoProps, "name"> {
    type?: "first" | "last" | "initial";
}
export type { ClassSectionProps, CurrentUserRoleType, SectionType, StudentInfoProps, MayorInfoProps, AdviserInfoProps, FacultyInfoProps, StudentNameResultProps, };
