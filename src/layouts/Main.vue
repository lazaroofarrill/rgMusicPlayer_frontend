<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-bar class="bg-primary q-electron-drag" v-show="true">
        <q-btn flat label="File">
          <q-menu>
            <q-list>
              <q-item :key="n" clickable dense v-close-popup v-for="n in 3">Option {{n}}</q-item>
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
          <q-btn :icon="playing ? 'pause' : 'play_arrow'"
                 @click="$store.commit('player/togglePlaying')"/>
          <q-btn icon="skip_next"/>
        </q-btn-group>
        <div class="q-pa-md">
          {{$store.state.player.player.currentTime}}
        </div>
        <q-btn-group class="bg-white text-grey">
          <q-btn class="text-primary" icon="repeat_one"></q-btn>
          <q-btn icon="shuffle"></q-btn>
        </q-btn-group>
        <!--        <q-toolbar-title>-->
        <!--          Header-->
        <!--        </q-toolbar-title>-->
        <div class="col text-right flex no-wrap items-center" style="padding: 0 2rem">
          <q-slider class="cursor-pointer" color="white" v-model="progress"/>
          <span class="q-pa-sm">{{formattedTime(elapsedTime)}}/{{formattedTime(duration)}}</span>
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

  let audioComponent: HTMLAudioElement;

  export default defineComponent({
    // name: 'LayoutName',
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
        }
      };
    },
    setup() {
      const leftDrawer = ref(true);
      return { leftDrawer };
    },
    created(): void {
      setInterval(() => {
        this.tick = Math.abs(this.tick - 1);
      }, 1000);
    },
    computed: {
      volume: {
        get() {
          return this.$store.state.player.player.volume() * 100;
        },
        set(value) {
          if (value > 100) {
            value = 100;
          }
          this.$store.commit('player/changeVolume', value / 100);
        }
      },
      progress: {
        get(): number {
          return this.elapsedTime / this.duration * 100;
        },
        set(value) {
          this.$store.commit('player/updateProgress', value);
        }
      },
      elapsedTime: {
        get(): number {
          let dummy = this.tick;
          try {
            let $ = this.$store.state.player.player;
            return $.seek();
          } catch (e) {
            // console.error(e.message);
            return 0;
          }
        },
        set(value) {
        }
      },
      duration(): number {
        try {
          let $ = this.$store.state.player.player;
          return $.duration();
        } catch (e) {
          return 0;
        }
      },
      playing(): boolean {
        return this.$store.state.player.player.playing();
      }
    },
    methods: {
      formattedTime(value: number): string {
        let secs = Math.ceil(value);
        let mins = Math.floor(secs / 60);
        secs = secs % 60;
        return `${this.leftPad(mins, 2)}:${this.leftPad(secs, 2)}`;
      },
      leftPad(value: any, padding: number, padWith: any = 0): string {
        let pad = '';
        let l = value.toString().length;
        while (l < padding) {
          pad += padWith;
          l++;
        }
        return pad + value.toString();
      }
    }
  });
</script>
