<template>
	<div class="columns">
		<div class="column is-one-third" />

		<div class="column">
			<div class="field has-addons">
				<p class="control is-primary">
					<a
						class="button is-static is-primary">
						Name
					</a>
				</p>
				<div class="control is-expanded">
					<input
						v-model="item.name"
						class="input"
						type="text"
						placeholder="Please add your name"
						@focus="$store.commit('enableEditMode')"
						@blur="$store.commit('disableEditMode')">
				</div>

				<p class="control is-primary">
					<a class="button is-static is-primary">
						Hours
					</a>
				</p>
				<p class="control">
					<input
						v-model="item.hours"
						class="input"
						type="text"
						placeholder="Hours spent"
						@focus="$store.commit('enableEditMode')"
						@blur="$store.commit('disableEditMode')">
				</p>
			</div>

			<b-collapse :open="editMode" class="field">
				<div class="control">
					<textarea
						v-model="item.description"
						class="textarea is-link"
						placeholder="Please share the details"
						@focus="$store.commit('enableEditMode')"
						@blur="$store.commit('disableEditMode')" />
				</div>
			</b-collapse>


			<div class="field">
				<div class="control">
					<button ref="submitButton" class="button is-fullwidth is-warning" @click="storeItem"> <b>Submit</b> </button>
				</div>
			</div>
		</div>

		<div class="column is-one-third" />
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
	data() {
		return {
			lastFocus: null,
			publicPath: process.env.PUBLIC_PATH,
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
		...mapMutations(['enableEditMode', 'disableEditMode'])
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
.section {
  text-align: center;
}
</style>
