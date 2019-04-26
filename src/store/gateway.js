import axios from 'axios';

export default Gateway();
export { Gateway };

function Gateway({ get } = axios) {
	return {
		async loadData() {
			return JSON.parse(localStorage.getItem('recordedItems')) || [];
		},
		async saveData(itemToSave) {
			const currentItems = this.loadData();
			currentItems.push(itemToSave);
			localStorage.setItem('recordedItems', JSON.stringify(currentItems));
			return JSON.parse(localStorage.getItem('recordedItems'));
		},
		async deleteItem(itemId) {
			const currentItems = this.loadData();
			const updatedItems = currentItems.filter(item => item.id !== itemId);
			this.saveData(updatedItems);
			return this.loadData();
		}
	};
}

