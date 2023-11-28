import type { DateFileProps, FirestoreDatabaseProps } from "./document";
import type { RoleWithAdmin } from "./permission";
type SectionType = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";
type CurrentUserRoleType = "student" | "mayor" | "faculty" | "adviser" | RoleWithAdmin;
interface StudentNameResultProps extends Pick<StudentInfoProps, "name"> {
    type?: "first" | "last" | "initial";
}
interface UserBaseProps {
    email: string;
    name: string;
    src?: string;
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
}
interface MayorInfoProps extends Pick<StudentInfoProps, "studentNo">, ClassSectionProps, DateFileProps, Omit<UserBaseProps, "src"> {
}
interface AdviserInfoProps extends ClassSectionProps, DateFileProps, Omit<UserBaseProps, "name"> {
    name?: string;
}
interface FacultyInfoProps extends DateFileProps, UserBaseProps {
}
interface ReadStudentInfoProps extends StudentInfoProps, FirestoreDatabaseProps {
}
interface ReadMayorInfoProps extends MayorInfoProps, FirestoreDatabaseProps {
}
interface ReadAdviserInfoProps extends AdviserInfoProps, FirestoreDatabaseProps {
}
interface ReadFacultyInfoProps extends FacultyInfoProps, FirestoreDatabaseProps {
}
export type { SectionType, ClassSectionProps, CurrentUserRoleType, StudentNameResultProps, StudentInfoProps, MayorInfoProps, AdviserInfoProps, FacultyInfoProps, ReadStudentInfoProps, ReadMayorInfoProps, ReadAdviserInfoProps, ReadFacultyInfoProps, };
