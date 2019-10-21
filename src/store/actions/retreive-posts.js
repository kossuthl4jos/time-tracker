export function retreivePosts(commit, gateway) {
	const loadedData = gateway.loadData();
	commit('displaySortedPosts', loadedData);
}