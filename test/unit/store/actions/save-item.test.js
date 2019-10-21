import { saveItem } from 'src/store/actions/save-item';

const item = Item({
	description: 'description',
	name: 'name',
	hours: 'hours'
});
const gateway = {
	saveData: (itemToSave) => {
		savedItems.push(itemToSave);
		return savedItems;
	}
};
const state = { itemToSave: item };
let savedItems = [];
let mockCommit = {};
let mockDispatch = {};

function Item({ description = '', name = '', hours = '' } = {}) {
	return { description, name, hours };
}

function commit(called, payload) {
	mockCommit = { called, payload };
}

function dispatch(called, payload) {
	mockDispatch = { called, payload };
}

beforeEach(() => {
	savedItems = [];
});

describe('save-item', () => {
	test('save-item alerts if item description is missing', async () => {
		const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
		saveItem({ item: Item({
			description: undefined,
			name: 'name',
			hours: 'hours'
		}) });

		expect(spy).toHaveBeenCalledWith('Please fill in the fields');
	});

	test('save-item alerts if item name is missing', async () => {
		const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
		saveItem({ item: Item({
			description: 'description',
			name: undefined,
			hours: 'hours'
		}) });

		expect(spy).toHaveBeenCalledWith('Please fill in the fields');
	});

	test('save-item alerts if item hours is missing', async () => {
		const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
		saveItem({ item: Item({
			description: 'description',
			name: 'name',
			hours: undefined
		}) });

		expect(spy).toHaveBeenCalledWith('Please fill in the fields');
	});

	test('save-item delegates properly', async () => {
		saveItem({ commit, dispatch, state, gateway, item });

		expect(mockCommit).toEqual({
			called: 'storePost',
			payload: item
		});

		expect(mockDispatch).toEqual({
			called: 'retreivePosts',
			payload: undefined
		});
	});

	test('save-item returns updated list of items', async () => {
		saveItem({ commit, dispatch, state, gateway, item });

		const newItem = Item({
			description: 'newDescription',
			name: 'newName',
			hours: 'newHours'
		});
		state.itemToSave = newItem;

		const result = saveItem({ commit, dispatch, state, gateway, item: newItem });

		expect(result).toEqual([ item, newItem ]);
	});
});