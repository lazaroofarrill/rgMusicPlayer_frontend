<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-bar class="bg-primary q-electron-drag" v-show="true">
        <q-btn flat label="File">
          <q-menu>
            <q-list>
              <q-item :key="n" clickable dense v-close-popup v-for="n in 4">Option {{n}}</q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-bar>
      <q-toolbar>
        <q-btn
          @click="leftDrawer = !leftDrawer"
          dense
          flat
          icon="menu"
          round
          v-show="false"
        />
        <q-btn-group class="bg-white text-primary">
          <q-btn icon="skip_previous"/>
          <q-btn icon="play_arrow"/>
          <q-btn icon="skip_next"/>
        </q-btn-group>
        <div class="q-pa-md"/>
        <q-btn-group class="bg-white text-grey">
          <q-btn class="text-primary" icon="repeat_one"></q-btn>
          <q-btn icon="shuffle"></q-btn>
        </q-btn-group>
        <!--        <q-toolbar-title>-->
        <!--          Header-->
        <!--        </q-toolbar-title>-->
        <div class="col" style="padding: 0 2rem">
          <q-slider class="cursor-pointer" color="white" v-model="progress"/>
        </div>
        <q-btn color="white" icon="settings" text-color="primary" v-show="false"/>
        <div class="q-pa-md"/>
        <div class="flex no-wrap items-center" style="width: 10rem">
          <q-btn @click="volume-=10" dense flat icon="volume_down"/>
          <q-slider class="cursor-pointer" color="white" style="margin: 0 1rem" v-model="volume"/>
          <q-btn @click="volume+=10" dense flat icon="volume_up"/>
        </div>
      </q-toolbar>
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

  export default defineComponent({
    // name: 'LayoutName',
    data() {
      return {
        progress: 10,
        volume: 10,
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
        }
      };
    },

    setup() {
      const leftDrawer = ref(true);
      return { leftDrawer };
    }
  });
</script>
