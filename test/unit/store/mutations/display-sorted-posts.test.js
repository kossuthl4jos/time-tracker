
import { displaySortedPosts } from 'src/store/mutations/display-sorted-posts';
import Post from 'src/schema/Post';

describe('display-sorted-posts', () => {
	const state = {};

	const firstTestPost = Post({
		id: '',
		description: 'firstTestDescription',
		name: 'firstTestName',
		hours: '1',
		creationDate: '1'
	});
  
	const secondTestPost = Post({
		id: '',
		description: 'secondTestDescription',
		name: 'secondTestName',
		hours: '2',
		creationDate: '2'
	});

	const posts = [ firstTestPost, secondTestPost ];

	test('store posts in descending order', async () => {
		displaySortedPosts(state, posts);
		expect(state.listOfItemsToDisplay[0]).toEqual(secondTestPost);
		expect(state.listOfItemsToDisplay[1]).toEqual(firstTestPost);
	});
});
