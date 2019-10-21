export function saveItem({
	commit,
	dispatch,
	state,
	gateway,
	item
}) {
	if (!item.description || !item.name || !item.hours) {
		alert('Please fill in the fields');
		return;
	}
	commit('storePost', item);
	const save = gateway.saveData(state.itemToSave);
	dispatch('retreivePosts');
	return save;
}