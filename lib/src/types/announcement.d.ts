import type { DateFileProps } from "./document";
import type { PhotoMediaProps } from "./media";
type AnnouncementType = "event" | "university_memorandum" | "recognition" | "others";
interface AnnouncementProps extends DateFileProps, Partial<PhotoMediaProps> {
    type: AnnouncementType;
    title: string;
    state: "unpinned" | "pinned";
    endDate: number;
    message: string;
    postedBy: string;
    department: "cics";
    markedDates: string[];
}
export type { AnnouncementProps, AnnouncementType };
