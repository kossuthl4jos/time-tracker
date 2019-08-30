import { Store } from 'src/store';

describe('Store', () => {
	it('is unit testable without gateway', async () => {
		const gateway = {
			getChuckNorrisJoke: () => Promise.resolve('Test joke')
		};
		const store = Store({ gateway });
		await store.actions.loadJoke();
		expect(store.state.message).to.equal('Test joke');
	});

	it('is integration testable with gateway', async () => {
		const remoteCalls = [];
		const store = Store();
		await store.actions.loadJoke();
		expect(remoteCalls.length).to.equal(1);
		expect(remoteCalls[0]).to.include('/jokes/random');
		expect(remoteCalls[0]).to.include('?escape=javascript');
		expect(store.state.message).to.equal('Remote joke');
	});
});
