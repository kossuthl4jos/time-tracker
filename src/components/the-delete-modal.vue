<template>
	<div class="modal is-active">
		<div class="modal-background" />
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Watch out! You are about to remove an entry...</p>
			</header>
			<section class="modal-card-body">
				<p>Once deleted, there is no way back. Please carefully review:</p>
				<div class="box">
					<div class="message-header">
						<p>{{ item.name }} spent... {{ item.hours }} hour(s) </p>
					</div>
					<div class="message-body">
						{{ item.description }}
					</div>
					<i> Created: {{ Date(item.creationDate).toString() }}) </i>
				</div>
			</section>
			<footer class="modal-card-foot">
				<button
					handle="confirmModalButton"
					class="button is-danger"
					@click="finishDeleteProcess(item.id)">Let this entry go...</button>
				<button
					handle="rejectModalButton"
					class="button"
					@click="cancelDeleteProcess">WAIT, NO</button>
			</footer>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'TheDeleteModal',
	props: {
		item: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			isDeleting: false
		};
	},
	methods: {
		...mapActions(['deleteItem']),
		cancelDeleteProcess() {
			this.$emit('cancelDelete');
		},
		finishDeleteProcess(itemId) {
			this.deleteItem(itemId);
			this.$emit('cancelDelete');
		}
	},
};
</script>