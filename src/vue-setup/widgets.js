import Vue from 'vue';
import VueFocusLock from 'vue-focus-lock';
import CustomWidgets from '../widgets';

// Setup Font Awesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
config.autoReplaceSvg = false;
config.observeMutations = false;

// We could just bundle the entire Buefy component pack...
// import Buefy from 'buefy';
// Vue.use(Buefy);

// But reduce bundle size we cherry-pick components from Buefy
import Modal from 'buefy/dist/components/modal';

// Register 3rd party widgets
Vue.use(Modal);
Vue.component('vue-focus-lock', VueFocusLock); // The VueFocusLock.name would be "Lock" which conflicts with naming recommendations

// Register any custom made widgets to make them globally available in this app
Vue.use(CustomWidgets);
