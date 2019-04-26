import Vue from 'vue';
import { Store } from 'src/store';
import setup from 'src/vue-setup';
import TheMessage from './the-message';

describe('the-message.vue', () => {
	it('does not show popup by default', async () => {
		const vm = mount();
		expect(vm.$refs.modalMessage).toBeFalsy();
	});

	// Notice that we can pass in an ad-hoc created store instance
	it('shows message in popup', async () => {
		const store = Store();
		store.state.message = 'Test message';
		const vm = mount({ store });
		expect(vm.$refs.modalMessage.textContent).toBe('Test message');
	});
});

function mount(overrides) {
	const Constructor = Vue.extend(TheMessage);
	const options = Object.assign({}, setup, overrides);
	return new Constructor(options).$mount();
}
