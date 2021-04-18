<template>
  <q-layout view="hHh Lpr fFf">
    <PlayerControls/>
    <q-footer>
      <q-bar dense>
        hello
      </q-bar>
    </q-footer>

    <q-drawer
      :width="200"
      behavior="desktop"
      bordered
      side="left"
      v-model="leftDrawer"
    >
      <div class="fit q-pa-md">
        <q-scroll-area :bar-style="barStyle" :thumb-style="thumbStyle" style="height: 99%;">
          <q-item :key="n" clickable dense v-for="n in persons">
            <div>{{n.name}}</div>
          </q-item>
        </q-scroll-area>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
  import { defineComponent, ref } from '@vue/composition-api';
  import PlayerControls from 'components/PlayerControls.vue';

  let audioComponent: HTMLAudioElement;

  export default defineComponent({
    // name: 'LayoutName',
    components: {
      PlayerControls
    },
    data() {
      return {
        audioComponent,
        persons: [],
        thumbStyle: {
          right: '4px',
          borderRadius: '5px',
          backgroundColor: '#027be3',
          width: '7px',
          opacity: 0.75,
          cursor: 'pointer'
        },
        barStyle: {
          right: '2px',
          borderRadius: '9px',
          backgroundColor: '#027be3',
          width: '10px',
          opacity: 0.2,
          cursor: 'pointer'
        },
      };
    },
    setup() {
      const leftDrawer = ref(false);
      return { leftDrawer };
    },
    computed: {

    }
  });
</script>
