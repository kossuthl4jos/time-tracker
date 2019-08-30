import _gateway from './gateway';

import { totalNumberOfHoursSpent } from './getters/total-number-of-hours-spent';
import { numberOfDays } from './getters/number-of-days';
import { numberOfHours } from './getters/number-of-hours';

import { storePost } from './mutations/store-post';
import { displaySortedPosts } from './mutations/display-sorted-posts';

export { Store };

function Store({ gateway = _gateway } = {}) {
	const state = {
		message: null,
		itemToSave: { id: '', description: '', name: '', hours: '', creationDate: '' },
		listOfItemsToDisplay: gateway.loadData(),
		totalHours: 0,
	};

	const getters = {
		totalNumberOfHoursSpent,
		numberOfDays,
		numberOfHours
	};

	const mutations = {
		storePost(state, item) { storePost(state, item); },
		displaySortedPosts(state, items) { displaySortedPosts(state, items); },

	};

	const actions = {
		saveItem({ commit, dispatch }, item) {
			if (!item.description || !item.name || !item.hours) {
				alert('Please fill in the fields');
				return;
			}
			commit('storePost', item);
			const save = gateway.saveData(state.itemToSave);
			dispatch('retreivePosts');
			return save;
		},
		retreivePosts({ commit }) {
			const loadedData = gateway.loadData();
			commit('displaySortedPosts', loadedData);
		},
		deleteItem({ dispatch }, itemId) {
			const updatedData = gateway.deleteItem(itemId);
			dispatch('retreivePosts');
			return updatedData;
		}
	};

	return { state, getters, mutations, actions };
}
