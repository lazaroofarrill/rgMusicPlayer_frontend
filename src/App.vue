<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from '@vue/composition-api';

  export default defineComponent({
    name: 'App',
    created(): void {
      this.$store.dispatch('api/updateSongs');
    },
    mounted() {
      // this.$store.commit('player/loadPlayer');
    }
  });
</script>
<style>
  body {
    user-select: none;
    overflow: hidden;
  }
</style>
