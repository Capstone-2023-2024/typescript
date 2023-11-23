import type { CalendarProps, DateProps, WeekInfoProps } from "../types/date";
declare const weekNames: readonly ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
/** Returns an object with the name, and max days of the current month. starts with 0 as index. returns {name: undefined, maxDays: NaN} if the index doesn't exist */
declare function currentMonth({ month, year }: Omit<DateProps, "date">): {
    name: string;
    maxDays: number;
};
/** Returns an week info object that corresponds to the current weekday. returns {weekName: undefined, value: {[x]:NaN}} as fallback */
declare function currentWeekDay(props: DateProps): {
    weekName: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
    value: {
        weekIndex: number;
        currentDate: number;
    };
};
declare function calendarArray({ weekIndex, currentDate, maxDays, }: CalendarProps): WeekInfoProps[];
export { weekNames, calendarArray, currentMonth, currentWeekDay };
