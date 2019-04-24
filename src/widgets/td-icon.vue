<template>
	<span class="icon">
		<font-awesome-icon
			:icon="[from, icon]"
			v-bind="$attrs"
			class="fas" />
	</span>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
	/*
		Td simply stands for ThisDemo. It's recommended to pick a prefix that you can identify in your project.
		The allows you to tell your widgets apart from 3rd part ones at a glance.
	*/
	name: 'TdIcon',
	components: { FontAwesomeIcon },
	props: {
		icon: { type: String, required: true },
		from: { type: String, default: 'td' }
	}
};
</script>

