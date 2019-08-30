
import { totalNumberOfHoursSpent } from 'src/store/getters/total-number-of-hours-spent';

describe('totalNumberOfHoursSpent', () => {
	test('returns zero if there are no entries', async () => {
		const state = { listOfItemsToDisplay: [] };

		expect(totalNumberOfHoursSpent(state)).toEqual(0);
	});

	test('returns correct sum of one item', async () => {
		const state = { listOfItemsToDisplay: [{ hours: '1' }] };

		expect(totalNumberOfHoursSpent(state)).toEqual(1);
	});

	test('returns correct sum of two items', async () => {
		const state = { listOfItemsToDisplay: [{ hours: '2' }, { hours: '3' }] };

		expect(totalNumberOfHoursSpent(state)).toEqual(5);
	});

	test('ommits hourse when it includes letters', async () => {
		const state = { listOfItemsToDisplay: [{ hours: '2' }, { hours: '4not2' }, { hours: '3' }] };

		expect(totalNumberOfHoursSpent(state)).toEqual(5);
	});
});
