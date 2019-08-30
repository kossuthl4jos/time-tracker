import 'src/vue-setup';
import 'babel-polyfill';
import Vue from 'vue';

setupForJsdom();

// JsDOM does not support them
function setupForJsdom() {
	const div = { functional: true, render: (h, { data, children }) => h('div', data, children) };
	Vue.component('transition', div);
	Vue.component('transition-group', div);

	// Only needed when using vue-focus-lock which has a known issue with Jest
	Vue.component('vue-focus-lock', div);
}
