"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeObjectWithType = exports.recipientEscalation = exports.validateEmail = void 0;
/** Strictly validates email with the domain used by BulSU. aka `@bulsu.edu.ph` */
const validateEmail = (email) => {
    const bulsuRegex = /^[a-z]+(\.[a-z]+)*@bulsu\.edu\.ph$/;
    return bulsuRegex.test(email);
};
exports.validateEmail = validateEmail;
/** If it returns faculty, there is a problem */
function recipientEscalation(role) {
    switch (role) {
        case "student":
            return "mayor";
        case "mayor":
            return "adviser";
        case "adviser":
            return "program_chair";
        case "program_chair":
            return "department_head";
        case "department_head":
            return "board_member";
        default:
            return "faculty";
    }
}
exports.recipientEscalation = recipientEscalation;
function removeObjectWithType(obj, mode, type) {
    const filteredObj = {};
    /** Value filtering */
    Object.keys(obj).forEach((key) => {
        switch (mode) {
            case "key":
                return key !== type && (filteredObj[key] = obj[key]);
            case "value":
                return obj[key] !== type && (filteredObj[key] = obj[key]);
            default:
                return;
        }
    });
    return filteredObj;
}
exports.removeObjectWithType = removeObjectWithType;
