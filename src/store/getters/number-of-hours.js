export function numberOfHours(state, { totalNumberOfHoursSpent }) {
	return totalNumberOfHoursSpent - (Math.floor(totalNumberOfHoursSpent / 24) * 24);
}
