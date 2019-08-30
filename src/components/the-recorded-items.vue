<template>
  <div>
    <div class="columns">
      <div class="column is-one-third" />
      <div class="column">
        <article
        v-for="(item, index) in listOfItemsToDisplay"
        :key="item.id"
        :handle="'item' + index"
        class="message is-link">
          <div
            :handle="'itemHeader' + index"
            class="message-header">
            <p>{{ item.name }} spent... {{ item.hours }} hour(s) </p>
            <button
              handle="deleteItemButton"
              class="delete"
              aria-label="delete"
              @click="launchDeleteProcess(item)"></button>
          </div>
          <div
            :handle="'itemDescription' + index"
            class="message-body">
            {{ item.description }}
          </div>
          <the-delete-modal
            handle="deleteModal"
            v-if="isDeleting"
            :item="selectedItem"
            @cancelDelete="cancelDeleteProcess"
          />
        </article>
      </div>
      <div class="column is-one-third" />
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
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
    ...mapActions(['retreivePosts']),
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
</style>
