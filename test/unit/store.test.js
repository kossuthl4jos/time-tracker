import { Store } from 'src/store';
import { Gateway } from 'src/gateway';

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
		const get = url => {
			remoteCalls.push(url);
			return Promise.resolve({ data: { value: { joke: 'Remote joke' } } });
		};
		const store = Store({ gateway: Gateway({ get }) });
		await store.actions.loadJoke();
		expect(remoteCalls.length).to.equal(1);
		expect(remoteCalls[0]).to.include('/jokes/random');
		expect(remoteCalls[0]).to.include('?escape=javascript');
		expect(store.state.message).to.equal('Remote joke');
	});
});
