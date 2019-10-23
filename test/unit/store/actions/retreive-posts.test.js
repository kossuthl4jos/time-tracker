import { retreivePosts } from 'src/store/actions/retreive-posts';
import gateway from 'test/mocks/gateway-mock.js';

let mockCommit = {};

function commit(called, payload) {
	mockCommit = { called, payload };
}

describe('retreive-posts', () => {
	test('retreive posts loads the posts', async () => {
		retreivePosts(commit, gateway);

		expect(mockCommit).toEqual({
			called: 'displaySortedPosts',
			payload: 'loadedData'
		});
	});
});