<template>
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
      <q-btn :class="$store.getters['playlist/repeatStyle'].class"
             :icon="$store.getters['playlist/repeatStyle'].icon"
             @click="$store.commit('playlist/toggleRepeat')"></q-btn>
      <q-btn :class="`${$store.state.playlist.shuffle ? 'text-primary' : ''}`"
             @click="$store.commit('playlist/toggleShuffle')"
             icon="shuffle"></q-btn>
    </q-btn-group>
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
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';

  export default defineComponent({
    // name: 'ComponentName'
    data() {
      return {
        tick: 0
      };
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
