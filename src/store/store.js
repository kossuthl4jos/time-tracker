import _gateway from './gateway';

import { totalNumberOfHoursSpent } from './getters/total-number-of-hours-spent';
import { numberOfDays } from './getters/number-of-days';
import { numberOfHours } from './getters/number-of-hours';

import { enableEditMode } from './mutations/enable-edit-mode';
import { disableEditMode } from './mutations/disable-edit-mode';
import { storePost } from './mutations/store-post';
import { displaySortedPosts } from './mutations/display-sorted-posts';

export { Store };

// This structure follows the Vuex store specification
function Store({ gateway = _gateway } = {}) {
	// The most relevant object to your app
	const state = {
		message: null,
		itemToSave: { id: '', description: '', name: '', hours: '', creationDate: '' },
		listOfItemsToDisplay: [],
		totalHours: 0,
		editMode: false
	};

	// What you can compute from the state
	const getters = {
		totalNumberOfHoursSpent,
		numberOfDays,
		numberOfHours
	};

	// The only mutations and actions are supposed to modify the state
	// Fast, synchronous state changes
	const mutations = {
		storePost(state, item) { storePost(state, item); },
		displaySortedPosts(state, items) { displaySortedPosts(state, items); },
		enableEditMode,
		disableEditMode
	};

	// Async / multi step changes
	const actions = {
		async saveItem({ commit, dispatch }, item) {
			if (!item.description || !item.name || !item.hours) {
				alert('Please fill in the fields');
				return;
			}
			commit('storePost', item);
			const save = await gateway.saveData(state.itemToSave);
			dispatch('retreivePosts');
			return save;
		},
		async retreivePosts({ commit }) {
			const loadedData = await gateway.loadData();
			commit('displaySortedPosts', loadedData);
		},
		async deleteItem({ dispatch }, itemId) {
			const updatedData = await gateway.deleteItem(itemId);
			dispatch('retreivePosts');
			return updatedData;
		}
	};

	return { state, getters, mutations, actions };
}
