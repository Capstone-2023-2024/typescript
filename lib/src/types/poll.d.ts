import type { DateFileProps, FirestoreDatabaseProps } from "./document";
interface OptionProps {
    value: string;
    vote?: number;
}
/** Student Number or Info for commenter */
interface CommentProps {
    commenter: string;
    value: string;
}
interface PollProps extends DateFileProps {
    text: string;
    type: "poll";
    days: number | null;
    state: "unpublished" | "published";
    options: OptionProps[];
    question: string;
    postedBy: string;
    comments?: CommentProps[];
}
interface PollEventProps extends Omit<PollProps, "days" | "text"> {
    votes?: Record<string, string>;
    dateOfExpiration: number;
}
interface ReadPollProps extends PollProps, FirestoreDatabaseProps {
}
interface ReadPollEventProps extends PollEventProps, FirestoreDatabaseProps {
}
export type { OptionProps, CommentProps, PollProps, PollEventProps, ReadPollProps, ReadPollEventProps, };
