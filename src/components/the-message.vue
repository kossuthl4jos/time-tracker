<template>
	<b-modal
		:width="640"
		:active="!!message"
		scroll="keep"
		role="dialog">
		<vue-focus-lock> <!-- Traps focus, making the modal more accessible. See project: vue-focus-lock -->
			<div class="modal-card">
				<header class="modal-card-head">
					<div class="modal-card-title">Hey</div>
				</header>
				<section ref="modalMessage" class="modal-card-body">{{ message }}</section>
				<footer class="modal-card-foot right-aligned">
					<button ref="showJoke" class="button" @click="loadJoke">Show a joke instead</button>
				</footer>
			</div>
		</vue-focus-lock>
	</b-modal>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
	computed: {
		...mapState(['message'])
	},
	methods: {
		...mapActions(['loadJoke'])
	}
};
</script>

<style lang="scss" scoped>
.modal-card-foot.right-aligned {
  justify-content: flex-end;
}
</style>
