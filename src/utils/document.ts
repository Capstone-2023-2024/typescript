/** Formats integer into string with the intention of making all digits less than 10 with a 0 prefix. used for uniforming dates and months */
function formatDateOrMonth(value: number) {
  return value > 9 ? `${value}` : `0${value}`
}

export { formatDateOrMonth }
