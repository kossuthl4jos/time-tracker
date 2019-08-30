import { mount as vueMount, shallowMount as vueShallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import i18n from '../src/vue-setup';

export { find, findAll, click, input, enter, enterWithKeyDown };
export {
	findByHandle, findAllByHandle, clickByHandle,
	inputByHandle, changeByHandle, pressEnterByHandle,
	toggleByHandle, isCheckedByHandle, findBySelector, findAllBySelector,
	nextTick, resolveAllPromises
};

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

async function click(wrapper, ref) {
	const node = find(wrapper, ref);
	node.trigger('click');
	return nextTick();
}

async function clickByHandle(wrapper, handle) {
	const node = handle ? findByHandle(wrapper, handle) : wrapper;
	node.trigger('click');
	return nextTick();
}

async function input(wrapper, ref, text) {
	const node = find(wrapper, ref);
	node.element.value = text;
	node.trigger('input');
	return nextTick();
}

async function inputByHandle(wrapper, handle, text) {
	const node = findByHandle(wrapper, handle);
	node.element.value = text;
	node.trigger('input');
	return nextTick();
}

async function changeByHandle(wrapper, handle, text) {
	const node = findByHandle(wrapper, handle);
	node.element.value = text;
	node.trigger('change');
	return nextTick();
}


async function enter(wrapper, ref, text) {
	await input(wrapper, ref, text);
	const node = find(wrapper, ref);
	node.trigger('keyup.enter');
	return nextTick();
}

async function enterWithKeyDown(wrapper, ref, text) {
	await input(wrapper, ref, text);
	const node = find(wrapper, ref);
	node.trigger('keydown.enter');
	return nextTick();
}

async function pressEnterByHandle(wrapper, handle) {
	const node = handle ? findByHandle(wrapper, handle) : wrapper;
	node.trigger('keyup.enter');
	return nextTick();
}

async function toggleByHandle(wrapper, handle) {
	findByHandle(wrapper, handle).trigger('change');
	return nextTick();
}

export function textByHandle(wrapper, handle) {
	return findByHandle(wrapper, handle).element.value;
}

function isCheckedByHandle(wrapper, handle) {
	return findByHandle(wrapper, handle).element.checked;
}

function nextTick() {
	return Vue.nextTick();
}

function resolveAllPromises() {
	return nextTick();
}
