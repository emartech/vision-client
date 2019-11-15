<template>
  <div class="e-layout">
    <header class="e-layout__header">
      <h1 class="e-layout__title">Overview</h1>
    </header>
    <main class="e-layout__content">
      <ContactFieldList :contact-fields="[]" />
    </main>
  </div>
</template>

<script>
import ContactFieldList from './contact-field-list.vue';

export default {
  name: 'app',
  components: {
    ContactFieldList
  }
};
</script>
