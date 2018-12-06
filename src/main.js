import 'bulma/css/bulma.css';
import 'src/app.less';

import 'babel-polyfill';
import Vue from 'vue';
import vueSetup from './vue-setup';

const app = {
  el: '#app',
  render: h => h('router-view')
};
new Vue(Object.assign(app, vueSetup));

console.log(`Page loaded. You won't see this message when using HMR and editing vue files.`);
