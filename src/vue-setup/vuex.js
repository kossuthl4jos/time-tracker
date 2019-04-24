import Vuex from 'vuex';
import Vue from 'vue';
import store from '../store';

Vue.use(Vuex);

const strict = process.env.NODE_ENV !== 'production';
export default new Vuex.Store(Object.assign({ strict }, store));
