import { mount,  findByHandle } from 'test/test-utils';
import TheForm from 'src/components/the-form';
import Vuex from 'vuex';


describe('the-form.vue', () => {
	test('does not show collapsed fields by default', async () => {
		const store = new Vuex.Store();
		const vm = mount(TheForm, { store });
		expect(findByHandle(vm, 'nameInputForm').exists()).toBe(true);
		expect(findByHandle(vm, 'hoursSpentInputForm').exists()).toBe(true);
		expect(findByHandle(vm, 'detailsCollapseElement').exists()).toBe(true);
		expect(findByHandle(vm, 'submitButton').exists()).toBe(true);
	});
});