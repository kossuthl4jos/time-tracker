import { deleteItem } from 'src/store/actions/delete-item';
import gateway from 'test/mocks/gateway-mock.js';
import Post from 'src/schema/Post';
import { dispatch, mockDispatch } from 'test/mocks/vuex-mock';


const item = Post({
	id: 'id',
	description: 'description',
	name: 'name',
	hours: 'hours'
});

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