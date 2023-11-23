"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = void 0;
/** Strictly validates email with the domain used by BulSU. aka `@bulsu.edu.ph` */
const validateEmail = (email) => {
    const bulsuRegex = /^[a-z]+(\.[a-z]+)*@bulsu\.edu\.ph$/;
    return bulsuRegex.test(email);
};
exports.validateEmail = validateEmail;
