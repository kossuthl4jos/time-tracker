import { mount,  findByHandle, clickByHandle } from 'test/test-utils';
import TheDeleteModal from 'src/components/the-delete-modal';
import Post from 'src/schema/Post';
import Vuex from 'vuex';

let actions;
let store;
let wrapper;
const item = Post({
	id: 'testId', 
	description: 'testDescription',
	name: 'testName',
	hours: '1',
	creationDate: 1234567891011
});

beforeEach(() => {
	actions = {
		deleteItem: jest.fn(),
	};
	store = new Vuex.Store({ actions });
	wrapper = mount(TheDeleteModal, { store, propsData: { item } });
});

describe('the-delete-modal.vue', () => {
	test('shows fields by default', async () => {
		expect(findByHandle(wrapper, 'confirmModalButton').exists()).toBe(true);
		expect(findByHandle(wrapper, 'rejectModalButton').exists()).toBe(true);
	});

	test('rejecting the modal only cancels the modal', async () => {
		clickByHandle(wrapper, 'rejectModalButton');

		expect(actions.deleteItem).not.toHaveBeenCalled();
		expect(wrapper.emitted().cancelDelete).toBeTruthy();
	});

	test('confirming the modal deletes the item', async () => {
		clickByHandle(wrapper, 'confirmModalButton');

		expect(actions.deleteItem).toHaveBeenCalled();
		expect(wrapper.emitted().cancelDelete).toBeTruthy();
	});
});