<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar class="bg-primary flex text-body1 q-electron-drag" style="margin-top: 10px" v-show="true">
        <q-btn dense flat label="File">
          <q-menu>
            <q-list>
              <q-item :key="n" clickable dense v-close-popup v-for="n in 3">Option {{n}}</q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-space/>
        <q-input :debounce="500" @clear="$store.dispatch('api/updateSongs')" clearable dark dense
                 input-class="text-body1" label="searh" rounded
                 standout style="width: 350px" v-model="filter">
        </q-input>
      </q-toolbar>
      <PlayerControls/>
    </q-header>

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
        tick: 0,
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
        theFilter: ''
      };
    },
    setup() {
      const leftDrawer = ref(false);
      return { leftDrawer };
    },
    computed: {
      filter: {
        get() {
          return this.theFilter;
        },
        set(value) {
          this.theFilter = value;
          if (value.length === 0) {
            this.$store.dispatch('api/updateSongs');
            return;
          }
          this.$store.dispatch('api/search', value);
        }
      }
    }
  });
</script>
