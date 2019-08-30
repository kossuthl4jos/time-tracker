<template>
	<div class="section form-grid-container">
			<div class="field has-addons name-hour-item">
				<p class="control is-primary">
					<a
						class="button is-static is-primary">
						Name
					</a>
				</p>
				<div class="control is-expanded">
					<input
						v-model="item.name"
						handle="nameInputForm"
						class="input"
						type="text"
						placeholder="Please add your name"
						@focus="isEditMode = !isEditMode"
						@blur="isEditMode = !isEditMode">
				</div>

				<p class="control is-primary">
					<a class="button is-static is-primary">
						Hours
					</a>
				</p>
				<p class="control">
					<input
						v-model="item.hours"
						handle="hoursSpentInputForm"
						class="input"
						type="text"
						placeholder="Hours spent"
						@focus="isEditMode = !isEditMode"
						@blur="isEditMode = !isEditMode">
				</p>
			</div>

			<b-collapse
				:open="isEditMode"
				handle="detailsCollapseElement"
				class="field description-item">
				<div class="control">
					<textarea
						v-model="item.description"
						handle="detailsInputForm"
						class="textarea is-link"
						placeholder="Please share the details"
						@focus="isEditMode = !isEditMode"
						@blur="isEditMode = !isEditMode" />
				</div>
			</b-collapse>

		<div class="field button-item">
			<div class="control">
				<button
					ref="submitButton"
					handle="submitButton"
					class="button is-fullwidth is-warning has-text-weight-bold"
					@click="storeItem"> Submit </button>
			</div>
		</div>

	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
	data() {
		return {
			isEditMode: false,
			item: {
				description: '',
				name: '',
				hours: ''
			}
		};
	},
	computed: {
		...mapState(['editMode']),
		...mapGetters(['totalNumberOfHoursSpent']),
	},
	methods: {
		storeItem() {
			this.$store.dispatch('saveItem', this.item);
			this.item= {
				description: '',
				name: '',
				hours: ''
			};
		}
	}
};
</script>

<style lang="scss" scoped>
	.form-grid-container {
		display: grid;
		grid-template-columns: auto auto auto;
		justify-content: center;
	}
	.name-hour-item {
		grid-column: 2;
		grid-row: 1;
	}
	.description-item {
		grid-column: 2;
		grid-row: 2;
	}
	.button-item {
		grid-column: 2;
		grid-row: 3;
	}
</style>
