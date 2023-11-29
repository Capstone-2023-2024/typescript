import { CurrentUserRoleType } from "../types/user"

/** Strictly validates email with the domain used by BulSU. aka `@bulsu.edu.ph` */
const validateEmail = (email: string) => {
  const bulsuRegex = /^[a-z]+(\.[a-z]+)*@bulsu\.edu\.ph$/
  return bulsuRegex.test(email)
}
/** If it returns faculty, there is a problem */
function recipientEscalation(role: CurrentUserRoleType): CurrentUserRoleType {
  switch (role) {
    case "student":
      return "mayor"
    case "mayor":
      return "adviser"
    case "adviser":
      return "program_chair"
    case "program_chair":
      return "department_head"
    case "department_head":
      return "board_member"
    default:
      return "faculty"
  }
}

function removeUndefinedValuesObject(obj: Record<any, any>) {
  const filteredObj = {}
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined) {
      filteredObj[key] = obj[key]
    }
  })
  return filteredObj
}

export { validateEmail, recipientEscalation, removeUndefinedValuesObject }
