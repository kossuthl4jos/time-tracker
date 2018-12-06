<template>
  <div>
    <div class="columns">
      <div class="column is-one-fifth"></div>
      <div class="column">
        <article
        v-for="item in savedItems"
        :key="item.id"
        class="message is-info">
          <div class="message-header">
            <p>{{ item.name }} spent... {{ item.hoursSpent }} hour(s) </p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            {{ item.description }}
          </div>
        </article>
      </div>
      <div class="column is-one-fifth"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      savedItems: this.$store.state.savedItems
    };
  }
};
</script>
