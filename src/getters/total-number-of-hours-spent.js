export function totalNumberOfHoursSpent({ listOfItemsToDisplay }) {
	let totalHours = 0;
	for (var i = 0; i < listOfItemsToDisplay.length; i++) {
		totalHours += parseInt(listOfItemsToDisplay[i].hours);
	}
	return totalHours;
}