<template>
	<div>
		<div class="columns">
			<div class="column is-one-third" />
			<div class="column">
				<article
					v-for="item in listOfItemsToDisplay"
					:key="item.id"
					class="message is-link">
					<div class="message-header">
						<p>{{ item.name }} spent... {{ item.hours }} hour(s) </p>
						<button class="delete" aria-label="delete" @click="launchDeleteProcess(item)" />
					</div>
					<div class="message-body">
						{{ item.description }}
					</div>
					<the-delete-modal
						v-if="isDeleting"
						:item="selectedItem"
						@cancelDelete="cancelDeleteProcess" />
				</article>
			</div>
			<div class="column is-one-third" />
		</div>

	</div>
</template>

<script>
import { mapState } from 'vuex';
import TheDeleteModal from 'src/components/the-delete-modal';

export default {
	components: { TheDeleteModal },
	data() {
		return {
			isDeleting: false,
			selectedItem: {}
		};
	},
	computed: {
		...mapState(['listOfItemsToDisplay'])
	},
	methods: {
		launchDeleteProcess(item) {
			this.isDeleting = true;
			this.selectedItem = item;
		},
		cancelDeleteProcess() {
			this.isDeleting = false;
			this.selectedItem = {};
		}
	},
};
</script>

<style lang="scss" scoped>
.table {
	margin: 0 auto;
}
</style>
