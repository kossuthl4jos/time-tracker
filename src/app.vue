<template>
	<div>
		<the-header />

		<the-counter :hours-spent="totalNumberOfHoursSpent" />

		<the-form />

		<the-recorded-items/>
		
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

import TheRecordedItems from './components/the-recorded-items';
import TheCounter from './components/the-counter';
import TheHeader from './components/the-header';
import TheForm from './components/the-form';

export default {
	components: { TheRecordedItems, TheCounter, TheHeader, TheForm },
	computed: {
		...mapGetters(['totalNumberOfHoursSpent'])
	}
};
</script>

<style lang="scss" scoped>
.section {
  text-align: center;
}
.has-bg-img { background: url('./resources/sport.svg')center center; background-size:cover; }
</style>
