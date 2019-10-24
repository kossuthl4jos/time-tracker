
import { storePost } from 'src/store/mutations/store-post';
import Post from 'src/schema/Post';
import validate from 'uuid-validate';

let itemToSave;
let state;

describe('storePost', () => {
	const testPost = Post({
		id: '',
		description: 'testDescription',
		name: 'testName',
		hours: '1',
		creationDate: ''
	});

	beforeEach(() => {
		itemToSave = {};
		state = { itemToSave };
	});

	test('saves a valid UUID', async () => {
		storePost(state, Post());
		const UUID = state.itemToSave.id;
		const isValidUUID = validate(UUID, 4);
		expect(isValidUUID).toEqual(true);
	
	});

	test('saves details to store', async () => {
		storePost(state, testPost);
		expect(state.itemToSave.description).toEqual('testDescription');
		expect(state.itemToSave.name).toEqual('testName');
		expect(state.itemToSave.hours).toEqual('1');
		expect(state.itemToSave.creationDate).toBeLessThan(Date.now()+1);
	});
});
