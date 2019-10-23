import { saveItem } from 'src/store/actions/save-item';
import gateway from 'test/mocks/gateway-mock.js';
import Post from 'src/schema/Post';

const item = Post({
	description: 'description',
	name: 'name',
	hours: 'hours'
});

const state = { itemToSave: item };
let mockCommit = {};
let mockDispatch = {};

function commit(called, payload) {
	mockCommit = { called, payload };
}

function dispatch(called, payload) {
	mockDispatch = { called, payload };
}

describe('save-item', () => {
	test('save-item alerts if item description is missing', async () => {
		const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
		saveItem({ item: Post({ description: undefined }) });

		expect(spy).toHaveBeenCalledWith('Please fill in the fields');
	});

	test('save-item alerts if item name is missing', async () => {
		const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
		saveItem({ item: Post({ name: undefined }) });

		expect(spy).toHaveBeenCalledWith('Please fill in the fields');
	});

	test('save-item alerts if item hours is missing', async () => {
		const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
		saveItem({ item: Post({ hours: undefined }) });

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
		expect(saveItem({ commit, dispatch, state, gateway, item })).toEqual('itemsPlusSaved');
	});
});