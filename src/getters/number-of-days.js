export function numberOfDays(state, { totalNumberOfHoursSpent }) {
  return Math.floor(totalNumberOfHoursSpent / 24);
}
