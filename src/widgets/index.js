import TdIcon from './td-icon';

/* "Widgets" are just vue files that
	- are independent of the application shared state
	- are globally available in you app
	- are meant to be reusable
 */

export default function install(Vue) {
	// This icon follows Bulma's expectation of Font Awesome icons
	Vue.component(TdIcon.name, TdIcon);
}
