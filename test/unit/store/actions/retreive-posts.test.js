import { retreivePosts } from 'src/store/actions/retreive-posts';

let mockCommit = {};

function commit(called, payload) {
	mockCommit = { called, payload };
}

describe('retreive-posts', () => {
	test('retreive posts loads the posts', async () => {
		const gateway = { loadData: () => { return 'loadedData'; } };
		
		retreivePosts(commit, gateway);

		expect(mockCommit).toEqual({
			called: 'displaySortedPosts',
			payload: 'loadedData'
		});
	});
});