<template>
  <e-datagrid :data="dataGridInput">
    <e-datagrid-column head="Id" content-key="id"></e-datagrid-column>
    <e-datagrid-column head="Name" content-key="name"></e-datagrid-column>
    <e-datagrid-column head="Type" content-key="application_type"></e-datagrid-column>
    <e-datagrid-item-action icon="pencil" tooltip="Edit"></e-datagrid-item-action>
    <e-datagrid-item-action icon="trash-o" tooltip="Delete"></e-datagrid-item-action>
  </e-datagrid>
</template>

<script>
export default {
  name: 'ContactFieldList',
  props: {
    contactFields: Array
  },
  computed: {
    dataGridInput() {
      return JSON.stringify(this.contactFields);
    }
  }
};
</script>
