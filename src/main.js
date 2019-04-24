import 'buefy/dist/buefy.css';
import './style/app.scss';

import 'babel-polyfill';
import Vue from 'vue';
import vueSetup from './vue-setup';
import Buefy from 'buefy';

vueSetup.store.dispatch('retreivePosts');

const app = { el: '#app', render: h => h('router-view') };
new Vue(Object.assign(app, vueSetup, Vue.use(Buefy)));

// eslint-disable-next-line no-console
console.log('Page loaded. You won\'t see this message repeating when using HMR and editing vue files.');
