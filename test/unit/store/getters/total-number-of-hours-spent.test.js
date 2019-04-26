
import { totalNumberOfHoursSpent } from '../../../../src/store/getters/total-number-of-hours-spent';

describe('totalNumberOfHoursSpent', () => {
	it('returns zero if there are no entries', async () => {
		const state = { listOfItemsToDisplay: [] };

		expect(totalNumberOfHoursSpent(state)).toEqual(0);
	});

	it('returns correct sum of one item', async () => {
		const state = { listOfItemsToDisplay: [{ hours: 1 }] };

		expect(totalNumberOfHoursSpent(state)).toEqual(1);
	});

	it('returns correct sum of two items', async () => {
		const state = { listOfItemsToDisplay: [{ hours: 2 }, { hours: 3 }] };

		expect(totalNumberOfHoursSpent(state)).toEqual(5);
	});
});
