"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpPrefix = exports.formatTime = exports.formatDateOrMonth = exports.currentWeekDay = exports.currentMonth = exports.calendarArray = exports.weekNames = void 0;
const weekNames = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
];
exports.weekNames = weekNames;
/** Returns an object with the name, and max days of the current month. starts with 0 as index. returns {name: undefined, maxDays: NaN} if the index doesn't exist */
function currentMonth({ month, year }) {
    const months = [
        { name: "january", maxDays: 31 },
        { name: "february", maxDays: year % 4 === 0 ? 29 : 28 },
        { name: "march", maxDays: 31 },
        { name: "april", maxDays: 30 },
        { name: "may", maxDays: 31 },
        { name: "june", maxDays: 30 },
        { name: "july", maxDays: 31 },
        { name: "august", maxDays: 31 },
        { name: "september", maxDays: 30 },
        { name: "october", maxDays: 31 },
        { name: "november", maxDays: 30 },
        { name: "december", maxDays: 31 },
    ];
    if (month < months.length) {
        return months[month];
    }
    return { name: undefined, maxDays: NaN };
}
exports.currentMonth = currentMonth;
/** Returns an week info object that corresponds to the current weekday. returns {weekName: undefined, value: {[x]:NaN}} as fallback */
function currentWeekDay(props) {
    const date = new Date();
    date.setDate(props.date);
    date.setMonth(props.month);
    date.setFullYear(props.year);
    const weekIndex = date.getDay();
    const currentDate = date.getDate();
    if (weekIndex < weekNames.length) {
        return {
            weekName: weekNames[weekIndex],
            value: { weekIndex, currentDate },
        };
    }
    return {
        weekName: undefined,
        value: { weekIndex: NaN, currentDate: NaN },
    };
}
exports.currentWeekDay = currentWeekDay;
function calendarArray({ weekIndex, currentDate, maxDays, }) {
    const calendar = [];
    const maxLength = 42;
    const weekLength = 7;
    const startOfWeek = 0;
    function checkLastWeekIndex(weekIndex) {
        if (weekIndex === weekLength) {
            return startOfWeek;
        }
        return weekIndex + 1;
    }
    /* Push Dates */
    for (let x = 0; x < maxDays; x++) {
        const loopInit = x === 0;
        const weekInfo = {
            currentDate: currentDate + x,
            weekIndex: loopInit
                ? weekIndex
                : checkLastWeekIndex(calendar[x - 1].weekIndex),
        };
        calendar.push(weekInfo);
    }
    /**  Push filler weekInfo at the start of the mainArray*/
    for (let y = weekIndex; y > 0; y--) {
        const fillerWeekInfo = { currentDate: -1, weekIndex: -1 };
        calendar.unshift(fillerWeekInfo);
    }
    /** Inserts yet another sets of filler weekInfo to present the calendar uniformly. always ends with saturday  */
    while (calendar.length % weekLength !== 0 || calendar.length !== maxLength) {
        calendar.push({ currentDate: -1, weekIndex: -1 });
    }
    return calendar;
}
exports.calendarArray = calendarArray;
/** Formats integer into string with the intention of making all digits less than 10 with a 0 prefix. used for uniforming dates and months */
function formatDateOrMonth(value) {
    return value > 9 ? `${value}` : `0${value}`;
}
exports.formatDateOrMonth = formatDateOrMonth;
/** Returns formatted time with suffix */
function formatTime(date) {
    var _a;
    const localeTimeString = date.toLocaleTimeString();
    const splittedTime = localeTimeString.split(":");
    const hour = formatDateOrMonth(Number(splittedTime[0]));
    const minutes = formatDateOrMonth(Number(splittedTime[1]));
    const suffix = (_a = splittedTime[2]) === null || _a === void 0 ? void 0 : _a.match(/[A-Z]/g);
    return `${hour}:${minutes}:${suffix}`;
}
exports.formatTime = formatTime;
/** Return time with custom prefix e.g. Today at XX:XX PM */
function setUpPrefix(timestamp) {
    var _a;
    const date = new Date();
    const todate = date.getDate();
    const tomonth = date.getMonth();
    const toyear = date.getFullYear();
    const formatTimeDate = formatTime(timestamp);
    const timestampDate = timestamp.getDate();
    const timestampMonth = timestamp.getMonth();
    const timestampYear = timestamp.getFullYear();
    const monthDifference = tomonth - timestampMonth;
    const yearDifference = toyear - timestampYear;
    const weekName = (_a = weekNames[timestamp.getDay()]) === null || _a === void 0 ? void 0 : _a.substring(0, 3);
    const capitalizeWeekName = `${weekName === null || weekName === void 0 ? void 0 : weekName.charAt(0).toUpperCase()}${weekName === null || weekName === void 0 ? void 0 : weekName.substring(1, weekName.length)}`;
    if (timestamp.getFullYear() === toyear && timestampMonth === tomonth) {
        if (todate - 1 === timestampDate) {
            return `Yesterday at ${formatTimeDate}`;
        }
        else if (todate === timestampDate) {
            return `Today at ${formatTimeDate}`;
        }
        return `${capitalizeWeekName} ${timestampDate} at ${formatTimeDate}`;
    }
    else if (monthDifference >= 11 && timestampYear === toyear) {
        if (monthDifference === 1) {
            return `${monthDifference} month ago at ${formatTimeDate}`;
        }
        return `${monthDifference} months ago at ${formatTimeDate}`;
    }
    return `${yearDifference} year(s) ago`;
}
exports.setUpPrefix = setUpPrefix;
