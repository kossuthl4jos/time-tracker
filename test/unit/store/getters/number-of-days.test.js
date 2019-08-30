import { numberOfDays } from 'src/store/getters/number-of-days';

describe('numberOfDays', () => {
	test('returns zero when amount is less than a day', async () => {
		const state = {};
		const getters = { totalNumberOfHoursSpent: 20 };

		expect(numberOfDays(state, getters)).toEqual(0);
	});

	test('returns one when amount is a day', async () => {
		const state = {};
		const getters = { totalNumberOfHoursSpent: 24 };

		expect(numberOfDays(state, getters)).toEqual(1);
	});

	test('returns one when amount more than a day but less than two', async () => {
		const state = {};
		const getters = { totalNumberOfHoursSpent: 47 };

		expect(numberOfDays(state, getters)).toEqual(1);
	});

	test('returns two when amount is two days', async () => {
		const state = {};
		const getters = { totalNumberOfHoursSpent: 48 };

		expect(numberOfDays(state, getters)).toEqual(2);
	});
});