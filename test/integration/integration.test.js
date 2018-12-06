import Vue from 'vue';
import App from 'src/app.vue';
import { Store } from 'src/store';
import { Gateway } from 'src/gateway';
import setup from 'src/vue-setup';

const GET_RESPONSES = [
  { url: 'http://api.icndb.com/jokes/random', response: Joke('Joke with weird text') },
  { url: 'http://api.icndb.com/jokes/random?escape=javascript', response: Joke('Proper joke') }
];

const network = {
  async get(url) {
    return GET_RESPONSES.find(response => response.url === url).response || NoJoke();
  }
};

describe('The application', async() => {
  it('is testable with only the network mocked out', async() => {
    const vm = mountWith(network);
    vm.$refs.theButton.click();
    vm.$refs.theButton.click();
    await vm.$nextTick();
    expect(vm.$refs.subtitle.textContent).to.equal('You clicked Bulma 2 times');
    vm.$refs.theButton.click();
    vm.$refs.theButton.click();
    vm.$refs.theButton.click();
    await vm.$nextTick();
    expect(vm.$refs.modalMessage.textContent).to.equal('Getting with all this incrementing nonsense.');
    vm.$refs.showJoke.click();
    await vm.$nextTick(); // Request goes out
    await vm.$nextTick(); // Request arrives
    await vm.$nextTick(); // Modal state refreshes
    expect(vm.$refs.modalMessage.textContent).to.equal('Proper joke');
  });
});

function mountWith(network) {
  const Constructor = Vue.extend(App);
  const overrides = { store: Store({ gateway: Gateway(network) }) };
  const options = Object.assign({}, setup, overrides);
  return new Constructor(options).$mount();
}

async function Joke(joke) {
  return { data: { value: { joke } } };
}

async function NoJoke() {
  throw new Error('No joke for you');
}
