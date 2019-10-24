import { mount,  findBySelector } from 'test/test-utils';
import TheCounter from 'src/components/the-counter';
import Vuex from 'vuex';

let getters;
let store;
let wrapper;

beforeEach(() => {
	getters = {
		numberOfDays: jest.fn(),
		numberOfHours: jest.fn()
	};
	store = new Vuex.Store({ getters });
	wrapper = mount(TheCounter, { store });
});

describe('the-counter.vue', () => {
	test('shows fields by default', async () => {
		expect(findBySelector(wrapper, '.day-title-item').exists()).toBe(true);
		expect(findBySelector(wrapper, '.hour-title-item').exists()).toBe(true);
	});

	test('sets the correct default data', () => {
		const defaultData = TheCounter.data();
		expect(defaultData.selectedTheme).toBe('train-station');
	});

	test('calls store', async () => {
		expect(getters.numberOfDays).toHaveBeenCalled();
		expect(getters.numberOfHours).toHaveBeenCalled();
	});
});