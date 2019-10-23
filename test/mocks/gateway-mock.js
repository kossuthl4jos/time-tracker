export default MockGateway();
export { MockGateway };

function MockGateway() {
	return {
		loadData() { return 'loadedData'; },
		saveData() { return 'itemsPlusSaved'; },
		deleteItem() {	return 'itemsLessDeleted';	}
	};
}

