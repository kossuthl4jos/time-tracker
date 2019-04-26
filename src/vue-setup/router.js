import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../app.vue';

Vue.use(VueRouter);
const routes = [
	{ path: '/', redirect: '/welcome' },
	{ path: '/welcome', component: App }
];

export default new VueRouter({
	routes,
	// eslint-disable-next-line no-undef
	base: process.env.PUBLIC_PATH
});
