import Vue from 'vue';
import VueI18n from 'vue-i18n';
// import VueRouter from 'vue-router';
import Buefy from 'buefy';
import VueFocusLock from 'vue-focus-lock';
import store from './store';

import en from './resources/en-US';
import zh from './resources/zh-CN';

// Vue.use(VueRouter);
// const routes = [
// { path: '/', redirect: '/welcome' },
// { path: '/welcome', component: App }
// ];
// const router = new VueRouter({ routes, mode: 'history', base: process.env.PUBLIC_PATH });

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'en',
  messages: { en, zh }
});

Vue.use(Buefy, { defaultContainerElement: '#app' });
Vue.component(VueFocusLock.name, VueFocusLock); // The VueFocusLock.name is "Lock"

// An example on how to register a poor man's Vuex
Vue.mixin({
  beforeCreate() {
    const { store, parent } = this.$options;
    if (store) { this.$store = store; }
    else if (parent && parent.$store) { this.$store = parent.$store; }
  }
});

export default { i18n, store };

// export { router };

export { i18n };

export { store };
