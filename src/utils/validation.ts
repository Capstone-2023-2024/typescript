/** Strictly validates email with the domain used by BulSU. aka `@bulsu.edu.ph` */
const validateEmail = (email: string) => {
  const bulsuRegex = /^[a-z]+(\.[a-z]+)*@bulsu\.edu\.ph$/
  return bulsuRegex.test(email)
}

export { validateEmail }
