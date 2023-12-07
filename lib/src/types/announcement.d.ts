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
/** @Reference_here https://documentation.onesignal.com/reference/create-notification#send-to-users-based-on-filters */
interface FilterProps {
    field: "amount_spent" | "last_session" | "first_session" | "session_count" | "session_time" | "bought_sku" | "tag" | "language" | "app_version" | "location" | "country";
    key?: string;
    value: string;
    relation: "<" | ">" | "=" | "!=";
}
interface OperatorProps {
    operator: "AND" | "OR";
}
interface MessageProps {
    en: string;
}
interface WebButtonProps {
    id: string;
    text: string;
    icon: string;
    url: string;
}
interface NotificationProps {
    included_segments?: ("Student and Faculty" | "Subscribed Users" | "Cares Mobile Users" | "Total Subscriptions")[];
    filters?: (FilterProps | OperatorProps)[];
    contents?: MessageProps;
    headings?: MessageProps;
    web_buttons?: WebButtonProps[];
    name: string;
    /** Photo preview */
    big_picture?: string;
    priority?: number;
    android_channel_id?: string;
    include_external_user_ids?: string[];
    include_player_ids?: string[];
}
export type { ReactNativeCalendarProps, MarkedDatesProps, AnnouncementProps, ReadAnnouncementProps, AnnouncementType, NotificationProps, };
