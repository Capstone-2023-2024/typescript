import type { DateProps } from "./date";
import type { DateFileProps, FirestoreDatabaseProps } from "./document";
import type { PhotoMediaProps } from "./media";
type AnnouncementType = "event" | "university_memorandum" | "university memorandum" | "recognition" | "others";
interface ReactNativeCalendarProps {
    color: string;
    dotColor: string;
    textColor: string;
}
/** For assigning Marked Dates */
interface MarkedDatesProps extends Partial<ReactNativeCalendarProps> {
    calendar: DateProps[];
}
interface AnnouncementProps extends DateFileProps, Partial<PhotoMediaProps> {
    type: AnnouncementType;
    title: string;
    state: "unpinned" | "pinned";
    endDate: number;
    message: string;
    postedBy: string;
    department: "cics";
    markedDates: {
        [x: string]: Omit<MarkedDatesProps, "calendar">;
    };
}
interface ReadAnnouncementProps extends AnnouncementProps, FirestoreDatabaseProps {
}
export type { ReactNativeCalendarProps, MarkedDatesProps, AnnouncementProps, ReadAnnouncementProps, AnnouncementType, };
