import { deleteItem } from 'src/store/actions/delete-item';
import gateway from 'test/mocks/gateway-mock.js';
import Post from 'src/schema/Post';

const item = Post({
	id: 'id',
	description: 'description',
	name: 'name',
	hours: 'hours'
});

let mockDispatch = {};

function dispatch(called, payload) {
	mockDispatch = { called, payload };
}

describe('delete-item', () => {
	test('delete-item delegates properly', async () => {
		deleteItem({ dispatch, gateway });

		expect(mockDispatch).toEqual({
			called: 'retreivePosts',
			payload: undefined
		});
	});

	test('delete-item returns list of updated items', async () => {
		expect(deleteItem({ dispatch, gateway, itemId: item.id })).toEqual('itemsLessDeleted');
	});
});