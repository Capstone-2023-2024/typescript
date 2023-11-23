"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateOrMonth = void 0;
/** Formats integer into string with the intention of making all digits less than 10 with a 0 prefix. used for uniforming dates and months */
function formatDateOrMonth(value) {
    return value > 9 ? `${value}` : `0${value}`;
}
exports.formatDateOrMonth = formatDateOrMonth;
