<template>
  <div class="e-layout">
    <header class="e-layout__header">
      <a href="#" class="e-layout__back" @click="onBack">
        <e-layout-back-button>{{ $t('header.back') }}</e-layout-back-button>
      </a>
      <h1 class="e-layout__title">
        {{ $t('edit.title') }}: {{ name }}
      </h1>
      <div class="e-layout__actions">
        <button type="button" class="e-layout__action e-btn">{{ $t('edit.preview') }}</button>
      </div>
    </header>
    <main class="e-layout__content">
      <section class="e-layout__section e-padding-s">
        <h2>{{ name }}</h2>
        <div class="e-field">
          <label class="e-field__label" for="input01">Id</label>
          <input class="e-input e-input-large" id="input01" type="text" disabled placeholder="Placeholder 1">
        </div>
        <div class="e-field">
          <label class="e-field__label" for="input02">Name</label>
          <input class="e-input e-input-large" id="input02" type="text" placeholder="Placeholder 2" v-model="name">
        </div>
        <div class="e-buttongroup">
          <button class="e-btn" type="submit">Cancel</button>
          <button class="e-btn e-btn-primary" type="submit">Done</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['id'],
  data: () => ({ name: '' }),
  computed: {
    ...mapState(['contactFields'])
  },
  methods: {
    onBack() {
      this.$router.push({ name: 'overview' });
    }
  },
  watch: {
    contactFields: function() {
      const contactField = this.contactFields.find(contactField => contactField.id === this.id);
      this.name = contactField.name;
    }
  },
  mounted() {
    const contactField = this.contactFields.find(contactField => contactField.id === this.id);
    this.name = contactField ? contactField.name : '';
  }
};
</script>
