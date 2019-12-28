<template>
  <div class="e-layout">
    <header class="e-layout__header">
      <h1 class="e-layout__title">
        {{ $t('overview.title') }}
        <span v-if="flipperOn('ui_redesign_basics')">_redesigned</span>
      </h1>
    </header>
    <main class="e-layout__content">
      <section class="e-layout__section">
        <router-view v-if="!loading" />
        <div v-if="loading" style="position: relative; height: 300px;">
          <e-spinner data-fullscreen="true"></e-spinner>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapState(['loading']),
    ...mapGetters(['flipperOn'])
  },
  methods: {
    ...mapActions(['onLoad'])
  },
  mounted() {
    this.onLoad();
  }
};
</script>
