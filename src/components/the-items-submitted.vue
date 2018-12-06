<template>
  <div>
    <article
    v-for="item in savedItems"
    :key="item.id"
    class="message">
      <div class="message-header">
        <p>{{ item.name }} spent... {{ item.hoursSpent }} hour(s) </p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        {{ item.description }}
      </div>
    </article>
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
