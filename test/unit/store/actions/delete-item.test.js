import { deleteItem } from 'src/store/actions/delete-item';

function Item({ id = '', description = '', name = '', hours = '' } = {}) {
	return { id, description, name, hours };
}

const item = Item({
	id: 'id',
	description: 'description',
	name: 'name',
	hours: 'hours'
});

let mockDispatch = {};
let savedItems = [ item ];

function dispatch(called, payload) {
	mockDispatch = { called, payload };
}

const gateway = {
	deleteItem: (itemId) => {
		return savedItems.filter(item => item.id != itemId);
	}
};

beforeEach(() => {
	savedItems = [ item ];
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
		deleteItem({ dispatch, gateway, itemId: item.id });

		expect(deleteItem({ dispatch, gateway, itemId: item.id })).toEqual([]);
	});
});