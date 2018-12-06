import defaultGateway from './gateway';

export default Store();
export { Store };

// This structure is heavily inspired by Vuex
function Store({ gateway = defaultGateway } = {}) {
  // The most relevant object to your app
  const state = {
    counter: 0,
    message: null
  };

  // What you can compute from the state
  const getters = {
    isTired() {
      return state.counter >= 5;
    }
  };

  // The only mutations and actions are supposed to modify the state

  // Fast, synchronous state changes
  const mutations = {
    incrementCounter() {
      state.counter += 1;
      if (getters.isTired()) {
        state.message = 'Getting with all this incrementing nonsense.';
      }
    },

    dismissMessage() {
      state.message = null;
    }
  };

  // Slow, async state changes
  const actions = {
    async loadJoke() {
      const joke = await gateway.getChuckNorrisJoke();
      state.message = joke;
    }
  };

  return { state, getters, mutations, actions };
}
