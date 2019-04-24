<template>
	<div class="section has-text-centered">
		<div class="columns">
			<div class="column is-two-fifths" />

			<div class="column">
				<div class="subtitle"> Days </div>
				<IOdometer
					:value="numberOfDays + 100"
					:theme="selectedTheme"
					class="iOdometer" />
			</div>
			<div class="column">
				<div class="subtitle"> Hours </div>
				<IOdometer
					:value="numberOfHours + 100"
					:theme="selectedTheme"
					class="iOdometer" />
			</div>

			<div class="column is-two-fifths" />
		</div>
	</div>
</template>

<script type="text/babel">
import IOdometer from 'vue-odometer';
import 'odometer/themes/odometer-theme-train-station.css';
import 'odometer/themes/odometer-theme-digital.css';
import 'odometer/themes/odometer-theme-car.css';

export default {
	name: 'TheCounter',
	components: {
		IOdometer
	},
	data() {
		return {
			selectedTheme: 'train-station'
		};
	},
	computed: {
		numberOfDays() {
			return this.$store.getters.numberOfDays;
		},
		numberOfHours() {
			return this.$store.getters.numberOfHours;
		}
	}
};
</script>

<style lang="scss">
	.iOdometer {
		margin: 0;
	}
	.odometer {
		font-size: 75px;
	}
	.odometer .odometer-inside .odometer-digit:first-child {
		display: none;
	}
</style>