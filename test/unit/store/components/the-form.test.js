import { mount,  findByHandle, focusByHandle, blurByHandle, inputByHandle, mouseDownByHandle } from 'test/test-utils';
import TheForm from 'src/components/the-form';
import Vuex from 'vuex';

let store;
let wrapper;

beforeEach(() => {
	store = new Vuex.Store();
	wrapper = mount(TheForm, { store });
});

describe('the-form.vue', () => {
	test('shows fields by default', async () => {
		expect(findByHandle(wrapper, 'nameInputForm').exists()).toBe(true);
		expect(findByHandle(wrapper, 'hoursSpentInputForm').exists()).toBe(true);
		expect(findByHandle(wrapper, 'detailsCollapseElement').exists()).toBe(true);
		expect(findByHandle(wrapper, 'submitButton').exists()).toBe(true);
	});
	
	test('sets the correct default data', () => {
		const defaultData = TheForm.data();
		expect(defaultData.isEditMode).toBe(false);
		expect(defaultData.item).toEqual({
			description: '',
			name: '',
			hours: ''
		});
	});

	test('name on focus enables edit mode', () => {
		focusByHandle(wrapper, 'nameInputForm');

		expect(wrapper.vm.isEditMode).toBe(true);
	});

	test('name on blur disables edit mode', () => {
		focusByHandle(wrapper, 'nameInputForm');
		blurByHandle(wrapper, 'nameInputForm');

		expect(wrapper.vm.isEditMode).toBe(false);
	});

	test('hours on focus enables edit mode', () => {
		focusByHandle(wrapper, 'hoursSpentInputForm');

		expect(wrapper.vm.isEditMode).toBe(true);
	});

	test('hours on blur disables edit mode', () => {
		focusByHandle(wrapper, 'hoursSpentInputForm');
		blurByHandle(wrapper, 'hoursSpentInputForm');

		expect(wrapper.vm.isEditMode).toBe(false);
	});

	test('details on focus enables edit mode', () => {
		focusByHandle(wrapper, 'detailsInputForm');

		expect(wrapper.vm.isEditMode).toBe(true);
	});

	test('details on blur disables edit mode', () => {
		focusByHandle(wrapper, 'detailsInputForm');
		blurByHandle(wrapper, 'detailsInputForm');

		expect(wrapper.vm.isEditMode).toBe(false);
	});

	test('item is updated as fields are filled', () => {
		inputByHandle(wrapper, 'nameInputForm', 'Joe');
		inputByHandle(wrapper, 'hoursSpentInputForm', '3');
		inputByHandle(wrapper, 'detailsInputForm', 'Something');

		expect(wrapper.vm.item).toEqual({
			name: 'Joe',
			hours: '3',
			description: 'Something'
		});
	});

	test('item is reset on submit', () => {
		inputByHandle(wrapper, 'nameInputForm', 'Joe');
		inputByHandle(wrapper, 'hoursSpentInputForm', '3');
		inputByHandle(wrapper, 'detailsInputForm', 'Something');

		mouseDownByHandle(wrapper, 'submitButton');

		expect(wrapper.vm.item).toEqual({
			name: '',
			hours: '',
			description: ''
		});
	});
});