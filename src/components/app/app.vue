<template>
  <router-view />
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['onLoad'])
  },
  mounted() {
    this.onLoad();
  }
};
</script>
