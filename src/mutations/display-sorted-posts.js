export function displaySortedPosts(state, posts) {
  posts.sort(inDescendingOrderByDate('creationDate'));
  state.listOfItemsToDisplay = posts;
}

function inDescendingOrderByDate(propertyName) {
  return (first, second) => second[propertyName] - first[propertyName];
}
