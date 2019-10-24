import { mount as vueMount, shallowMount as vueShallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import i18n from '../src/vue-setup';

export { find, findByHandle, findAll, findAllByHandle, findBySelector, findAllBySelector };
export { inputByHandle, clickByHandle, mouseDownByHandle, nextTick, resolveAllPromises, focusByHandle, blurByHandle };

export function mount(component, options) {
	const localVue = createLocalVue();
	localVue.use(VueRouter);
	localVue.use(Vuex);
	const router = new VueRouter();

	return vueMount(component, Object.assign(options, { router, i18n }));
}

export function shallowMount(component, options) {
	const localVue = createLocalVue();
	localVue.use(VueRouter);
	localVue.use(Vuex);
	const router = new VueRouter();

	return vueShallowMount(component, Object.assign(options, { router, i18n }));
}

function find(wrapper, ref) {
	return wrapper.find({ ref });
}

function findByHandle(wrapper, handle) {
	return wrapper.find(`[handle="${handle}"]`);
}

function findAll(wrapper, ref) {
	return wrapper.findAll({ ref });
}

function findAllByHandle(wrapper, handle) {
	return wrapper.findAll(`[handle^="${handle}"]`);
}

function findBySelector(wrapper, selector) {
	return wrapper.find(selector);
}

function findAllBySelector(wrapper, selector) {
	return wrapper.findAll(selector);
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

function resolveAllPromises() {
	return nextTick();
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
