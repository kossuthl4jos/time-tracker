import Vue from 'vue';

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
import BCollapse from 'buefy/dist/components/collapse';

// Register 3rd party widgets
Vue.use(Modal);
Vue.use(BCollapse);
