export function deleteItem({ dispatch, gateway, itemId }) {
	const updatedData = gateway.deleteItem(itemId);
	dispatch('retreivePosts');
	return updatedData;
}