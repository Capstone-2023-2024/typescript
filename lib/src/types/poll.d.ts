import type { RoleWithAdmin } from "./permission";
interface OptionProps {
    value: string;
    vote?: number;
}
interface PollProps {
    type: "poll";
    state: "unpublished" | "published";
    days: number | null;
    options: OptionProps[];
    text: string;
    question: string;
}
interface PollEventProps extends Omit<PollProps, "days" | "text"> {
    postedBy: RoleWithAdmin;
    votes?: Record<string, string>;
    dateOfExpiration: number;
    dateCreated: number;
}
export type { OptionProps, PollProps, PollEventProps };
