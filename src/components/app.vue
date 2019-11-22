<template>
  <div class="e-layout">
    <header class="e-layout__header">
      <h1 class="e-layout__title">Overview</h1>
    </header>
    <main class="e-layout__content">
      <section class="e-layout__section">
        <ContactFieldList v-if="!loading" :contact-fields="contactFields" />
        <div v-if="loading" style="position: relative; height: 300px;">
          <e-spinner data-fullscreen="true"></e-spinner>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import ContactFieldList from './contact-field-list.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
    ContactFieldList
  },
  computed: {
    ...mapState(['loading', 'contactFields'])
  },
  methods: {
    ...mapActions(['onLoad'])
  },
  mounted() {
    window.setTimeout(() => this.onLoad(), 1000);
    // this.onLoad();
  }
};
</script>
