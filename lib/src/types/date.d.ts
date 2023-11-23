interface DateProps {
    date: number;
    month: number;
    year: number;
}
interface WeekInfoProps {
    weekIndex: number;
    currentDate: number;
}
interface CalendarProps extends WeekInfoProps {
    maxDays: number;
}
export type { DateProps, WeekInfoProps, CalendarProps };
