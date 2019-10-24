import Post from 'src/schema/Post';
import { mount, findByHandle, clickByHandle } from 'test/test-utils';
import TheRecordedItems from 'src/components/the-recorded-items';
import Vuex from 'vuex';

let store;
let wrapper;

beforeEach(() => {
	store = new Vuex.Store();
	wrapper = mount(TheRecordedItems, { store });
});

const testItemsToDisplay = [ Post({
	id: 'testId', 
	description: 'testDescription',
	name: 'testName',
	hours: '1',
	creationDate: 1234567891011
})];

describe('the-recorded-items.vue', () => {
	test('sets the correct default data', () => {
		const defaultData = TheRecordedItems.data();
		expect(defaultData.isDeleting).toBe(false);
		expect(defaultData.selectedItem).toEqual({});
	});

	test('does not show recorded item by default', async () => {
		expect(findByHandle(wrapper, 'item0').exists()).toBe(false);
	});
	
	test('shows recorded item when there is one', async () => {
		store.state.listOfItemsToDisplay = testItemsToDisplay;
		const customWrapper = mount(TheRecordedItems, { store });

		expect(findByHandle(customWrapper, 'item0').exists()).toBe(true);
		expect(findByHandle(customWrapper, 'itemHeader0').text()).toBe('testName spent... 1 hour(s)');
		expect(findByHandle(customWrapper, 'itemDescription0').text()).toBe('testDescription');
	});

	test('opens modal when delete button is clicked', async () => {
		store.state.listOfItemsToDisplay = testItemsToDisplay;
		const customWrapper = mount(TheRecordedItems, { store });

		clickByHandle(customWrapper, 'deleteItemButton');

		expect(findByHandle(customWrapper, 'deleteModal').exists()).toBe(true);		
	});
	
	test('dismisses modal when deleting is cancelled', async () => {
		store.state.listOfItemsToDisplay = testItemsToDisplay;
		const customWrapper = mount(TheRecordedItems, { store });

		clickByHandle(customWrapper, 'deleteItemButton');
		clickByHandle(customWrapper, 'rejectModalButton');

		expect(findByHandle(customWrapper, 'deleteModal').exists()).toBe(false);		
	});
});