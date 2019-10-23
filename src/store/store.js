import _gateway from './gateway';

import { totalNumberOfHoursSpent } from './getters/total-number-of-hours-spent';
import { numberOfDays } from './getters/number-of-days';
import { numberOfHours } from './getters/number-of-hours';

import { storePost } from './mutations/store-post';
import { displaySortedPosts } from './mutations/display-sorted-posts';

import { retreivePosts } from './actions/retreive-posts';
import { saveItem } from './actions/save-item';
import { deleteItem } from './actions/delete-item';

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
		saveItem({ commit, dispatch }, item) { return saveItem({ commit, dispatch, state, gateway, item }); },
		retreivePosts({ commit }) { return retreivePosts(commit, gateway); },
		deleteItem({ dispatch }, itemId) { return deleteItem({ dispatch, gateway, itemId }); }
	};

	return { state, getters, mutations, actions };
}
