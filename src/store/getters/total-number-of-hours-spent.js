export function totalNumberOfHoursSpent({ listOfItemsToDisplay }) {
	return listOfItemsToDisplay.length === 0 ?
	0:
	listOfItemsToDisplay
			.map(item => item.hours)
			.reduce((a, b) => numOr0(a) + numOr0(b), 0);
}

function numOr0(item) {
	for (let i = 0; i < item.length; i++) {
		if(isNaN(parseInt(item[i]))){
			return 0
		}
	}
	return parseInt(item)
} 

