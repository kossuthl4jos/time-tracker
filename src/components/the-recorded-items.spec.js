import { Store } from 'src/store';
import Post from '../schema/Post';
import { mount, findByHandle, clickByHandle } from '../../test/test-utils';
import TheRecordedItems from './the-recorded-items';

const testItemsToDisplay = [ Post({
	id: 'testId', 
	description: 'testDescription',
	name: 'testName',
	hours: '1',
	creationDate: 1234567891011
})];

describe('the-recorded-items.vue', () => {
	test('does not show recorded item by default', async () => {
		const store = Store();
		const vm = mount(TheRecordedItems, { store });
		expect(findByHandle(vm, 'item0').exists()).toBe(false);
	});
	
	test('shows recorded item when there is one', async () => {
		const store = Store();
		store.state.listOfItemsToDisplay = testItemsToDisplay;
		const vm = mount(TheRecordedItems, { store });
		expect(findByHandle(vm, 'item0').exists()).toBe(true);
		expect(findByHandle(vm, 'itemHeader0').text()).toBe('testName spent... 1 hour(s)');
		expect(findByHandle(vm, 'itemDescription0').text()).toBe('testDescription');
	});

	test('opens modal when delete button is clicked', async () => {
		const store = Store();
		store.state.listOfItemsToDisplay = testItemsToDisplay;
		const vm = mount(TheRecordedItems, { store });

		clickByHandle(vm, 'deleteItemButton');

		expect(findByHandle(vm, 'deleteModal').exists()).toBe(true);		
	});
	
	test('dismisses modal when deleting is cancelled', async () => {
		const store = Store();
		store.state.listOfItemsToDisplay = testItemsToDisplay;
		const vm = mount(TheRecordedItems, { store });

		clickByHandle(vm, 'deleteItemButton');
		clickByHandle(vm, 'rejectModalButton');

		expect(findByHandle(vm, 'deleteModal').exists()).toBe(false);		
	});
});