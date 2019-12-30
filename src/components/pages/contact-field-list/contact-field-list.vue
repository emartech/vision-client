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
        <e-datagrid :data="dataGridInput" v-if="!loading">
          <e-datagrid-column head="Id" content-key="id"></e-datagrid-column>
          <e-datagrid-column head="Name" content-key="name"></e-datagrid-column>
          <e-datagrid-column head="Type" content-key="application_type"></e-datagrid-column>
          <e-datagrid-item-action icon="pencil" tooltip="Edit" @trigger="onEdit"></e-datagrid-item-action>
          <e-datagrid-item-action icon="trash-o" tooltip="Delete"></e-datagrid-item-action>
        </e-datagrid>
        <div v-if="loading" style="position: relative; height: 300px;">
          <e-spinner data-fullscreen="true"></e-spinner>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['contactFields', 'loading']),
    ...mapGetters(['flipperOn']),
    dataGridInput() {
      return JSON.stringify(this.contactFields);
    }
  },
  methods: {
    onEdit(event) {
      const { id } = event.detail.data;
      this.$router.push({ name: 'edit', params: { id } });
    }
  }
};
</script>
