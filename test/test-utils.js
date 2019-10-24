import { mount as vueMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import i18n from '../src/vue-setup';

export { findByHandle, findBySelector, focusByHandle, blurByHandle };
export { inputByHandle, clickByHandle, mouseDownByHandle, nextTick };

export function mount(component, options) {
	const localVue = createLocalVue();
	localVue.use(VueRouter);
	localVue.use(Vuex);
	const router = new VueRouter();

	return vueMount(component, Object.assign(options, { router, i18n }));
}

// export function shallowMount(component, options) {
// 	const localVue = createLocalVue();
// 	localVue.use(VueRouter);
// 	localVue.use(Vuex);
// 	const router = new VueRouter();

// 	return vueShallowMount(component, Object.assign(options, { router, i18n }));
// }

function findByHandle(wrapper, handle) {
	return wrapper.find(`[handle="${handle}"]`);
}

function findBySelector(wrapper, selector) {
	return wrapper.find(selector);
}

async function clickByHandle(wrapper, handle) {
	const node = handle ? findByHandle(wrapper, handle) : wrapper;
	node.trigger('click');
	return nextTick();
}

async function mouseDownByHandle(wrapper, handle) {
	const node = handle ? findByHandle(wrapper, handle) : wrapper;
	node.trigger('mousedown');
	return nextTick();
}

async function inputByHandle(wrapper, handle, text) {
	const node = findByHandle(wrapper, handle);
	node.element.value = text;
	node.trigger('input');
	return nextTick();
}

async function focusByHandle(wrapper, handle) {
	const node = findByHandle(wrapper, handle);
	node.trigger('focus');
	return nextTick();
}

async function blurByHandle(wrapper, handle) {
	const node = findByHandle(wrapper, handle);
	node.trigger('blur');
	return nextTick();
}

function nextTick() {
	return Vue.nextTick();
}

// async function changeByHandle(wrapper, handle, text) {
// 	const node = findByHandle(wrapper, handle);
// 	node.element.value = text;
// 	node.trigger('change');
// 	return nextTick();
// }

// async function enterByHandle(wrapper, handle) {
// 	const node = handle ? findByHandle(wrapper, handle) : wrapper;
// 	node.trigger('keyup.enter');
// 	return nextTick();
// }

// function isCheckedByHandle(wrapper, handle) {
// 	return findByHandle(wrapper, handle).element.checked;
// }
