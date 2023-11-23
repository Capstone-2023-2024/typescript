import type { DateFileProps, FirestoreDatabaseProps } from "./document";
import type { PhotoMediaProps } from "./media";
import { RoleWithAdmin } from "./permission";
type AnnouncementType = "event" | "university_memorandum" | "recognition" | "others";
interface AnnouncementProps extends DateFileProps, FirestoreDatabaseProps, Partial<PhotoMediaProps> {
    type: AnnouncementType;
    title: string;
    state: "unpinned" | "pinned";
    endDate: number;
    message: string;
    postedBy: RoleWithAdmin;
    department: "cics";
    markedDates: string[];
}
export type { AnnouncementType, AnnouncementProps };
