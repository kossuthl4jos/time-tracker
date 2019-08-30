import { Store } from 'src/store/';
import Post from 'src/schema/Post';

describe('Store actions', () => {
	let commit;
	let dispatch;

	beforeEach(() => {
		commit = jest.fn();
		dispatch = jest.fn();
	});

	const firstTestPost = new Array(Post({
		id: '',
		description: 'firstTestDescription',
		name: 'firstTestName',
		hours: '1',
		creationDate: '1'
	}));

	test('retrive post calls mutation with data from gateway', async () => {
		const loadData = jest.fn().mockResolvedValue(firstTestPost);
		const store = Store({ gateway: { loadData } });
		await store.actions.retreivePosts({ commit });
		expect(commit).toHaveBeenCalledWith('displaySortedPosts', firstTestPost);
	});

	test('delete item delegates properly', async () => {
		const itemId = '42';
		const deleteItem = jest.fn().mockResolvedValue(firstTestPost);
		const store = Store({ gateway: { deleteItem } });

		const result = await store.actions.deleteItem({ dispatch }, itemId);

		expect(deleteItem).toHaveBeenCalledWith(itemId);
		expect(dispatch).toHaveBeenCalledWith('retreivePosts');
		expect(result).toBe(firstTestPost);
	});

// 	test('is integration testable with gateway', async () => {
// 		const getMock = jest.fn().mockResolvedValue({ data: { value: { joke: 'Remote joke' } } });
// 		const store = Store({ gateway: Gateway({ get: getMock }) });
// 		await store.actions.loadJoke({ commit });
// 		expect(getMock).toHaveBeenCalledTimes(1);
// 		expect(getMock).toHaveBeenCalledWith(expect.stringContaining('/jokes/random'));
// 		expect(getMock).toHaveBeenCalledWith(expect.stringContaining('?escape=javascript'));
// 		expect(commit).toHaveBeenCalledWith('showMessage', 'Remote joke');
// 	});
});
