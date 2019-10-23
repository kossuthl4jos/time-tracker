let mockCommit = {};
let mockDispatch = {};

export function commit(called, payload) {
	mockCommit = { called, payload };
}

export function dispatch(called, payload) {
	mockDispatch = { called, payload };
}

export { mockCommit, mockDispatch };