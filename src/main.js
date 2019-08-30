import 'bulma/css/bulma.css';
// import 'src/app.less';
import 'buefy/dist/buefy.css';
import './style/app.scss';

import 'babel-polyfill';
import Vue from 'vue';
import App from './app.vue';
import vueSetup from './vue-setup';
import Buefy from 'buefy';

const app = {
	el: '#app',
	render: h => h(App)
};
new Vue(Object.assign(app, vueSetup, Vue.use(Buefy)));

// eslint-disable-next-line no-console
console.log('Page loaded. You will not see this message when using HMR and editing vue files.');