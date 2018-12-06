<template>
  <div>
    <div class="section">
      <h1 class="title">Time tracker</h1>
    </div>

    <div class="columns">
      <div class="column"></div>

      <div class="column">
        <div class="field">
          <label class="label">Name n' hours</label>
          <div class="control">
            <input
              v-model="itemToSave.name"
              class="input"
              type="text"
              placeholder="Please add your name">
          </div>
        </div>

        <div class="field has-addons">
          <p class="control">
            <input v-model="itemToSave.hoursSpent" class="input" type="text" placeholder="Hours spent">
          </p>
          <p class="control">
            <a class="button is-static">
              hour(s)
            </a>
          </p>
        </div>

        <div class="field">
          <label class="label">Description of the problem</label>
          <div class="control">
            <textarea v-model="itemToSave.description" class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button @click="saveItem" class="button is-info">Submit</button>
          </div>
        </div>
      </div>

      <div class="column"></div>
    </div>

    <hr />

    <the-items-submitted v-if="hasSavedItems()"></the-items-submitted>

  </div>
</template>

<script>
import TheItemsSubmitted from 'src/components/the-items-submitted.vue';

export default {
  data() {
    return {
      state: this.$store.state,
      itemToSave: {
        name: '',
        hoursSpent: 0,
        description: ''
      }
    };
  },
  methods: {
    hasSavedItems() { return this.$store.getters.hasSavedItems(); },
    saveItem() { this.$store.mutations.saveItem(this.$data.itemToSave); console.log(this.hasSavedItems()); },
    incrementCounter() { this.$store.mutations.incrementCounter(); },
    dismissMessage() { this.$store.mutations.dismissMessage(); },
    toggleLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'zh' : 'en';
    },
    showJoke() { this.$store.actions.loadJoke(); }
  },
  components: { TheItemsSubmitted }
};
</script>

<style lang="less" scoped>
.live-color-box{
  width: 40px;
  height: 40px;
  margin-top: 40px;
  background: black
}

.dead-color-box{
  width: 40px;
  height: 40px;
  margin-top: 40px;
  background: blue
}

.modal-card-foot {
  justify-content: flex-end;
}

.section{
  text-align: center;

  h1 {
    height: 80px;
    width: 100%;
    line-height: 80px;
    margin-bottom: 0px;
    cursor: pointer;
  }

  h1 a:hover {
    color: orange;
  }
}
</style>
