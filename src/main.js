import 'bulma/css/bulma.css';
import 'src/app.less';

import 'babel-polyfill';
import Vue from 'vue';
import App from './app.vue';
import vueSetup from './vue-setup';

const app = {
	el: '#app',
	render: h => h(App)
};
new Vue(Object.assign(app, vueSetup));

// eslint-disable-next-line no-console
console.log('Page loaded. You will not see this message when using HMR and editing vue files.');