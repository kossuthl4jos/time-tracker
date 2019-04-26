import axios from 'axios';

export default Gateway();
export { Gateway };

function Gateway({ get } = axios) {
	return {
		async getChuckNorrisJoke() {
			const { data } = await get('http://api.icndb.com/jokes/random?escape=javascript');
			return data.value.joke;
		}
	};
}

