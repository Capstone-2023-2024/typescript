interface OptionProps {
    value: string;
    vote?: number;
}
/** Student Number or Info for commenter */
interface CommentProps {
    commenter: string;
    value: string;
}
interface PollProps {
    type: "poll";
    state: "unpublished" | "published";
    days: number | null;
    options: OptionProps[];
    text: string;
    question: string;
    comments: CommentProps[];
}
interface PollEventProps extends Omit<PollProps, "days" | "text"> {
    postedBy: string;
    votes?: Record<string, string>;
    dateOfExpiration: number;
    dateCreated: number;
}
export type { OptionProps, PollProps, PollEventProps, CommentProps };
