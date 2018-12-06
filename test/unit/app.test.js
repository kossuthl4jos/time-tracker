import Vue from 'vue';
import App from 'src/app.vue';
import { Store } from 'src/store';
import setup from 'src/vue-setup';

describe('App.vue', () => {
  it('displays in English by default', async() => {
    const vm = mount();
    expect(vm.$i18n.locale).to.equal('en');
  });

  it('toggles language', async() => {
    const vm = mount();
    vm.$refs.langToggle.click();
    await vm.$nextTick();
    expect(vm.$i18n.locale).to.equal('zh');
  });

  it('does not show popup by default', async() => {
    const vm = mount();
    expect(vm.$refs.modalMessage).to.not.ok;
  });

  // Notice that we can pass in an ad-hoc created store instance
  it('shows message in popup', async() => {
    const store = Store();
    store.state.message = 'Test message';
    const vm = mount({ store });
    expect(vm.$refs.modalMessage.textContent).to.equal('Test message');
  });
});

function mount(overrides) {
  const Constructor = Vue.extend(App);
  const options = Object.assign({}, setup, overrides);
  return new Constructor(options).$mount();
}
