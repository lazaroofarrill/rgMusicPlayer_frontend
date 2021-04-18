<template>
  <q-header elevated>
    <q-toolbar class="bg-primary flex text-body1 q-electron-drag" style="margin-top: 10px" v-show="true">
      <div class="col">
        <q-btn flat icon="settings" round/>
      </div>
      <div class="col column items-stretch">
        <div class="text-h6 text-center">{{$store.state.player.currentSong.title}}</div>
        <div class="text-body1 text-center">{{$store.state.player.currentSong.author}}</div>
      </div>
      <div class="col flex justify-end">
        <q-input :debounce="500" @clear="$store.dispatch('api/updateSongs')" clearable dark dense
                 input-class="text-body1" label="searh" rounded
                 standout style="width: 350px" v-model="filter"/>
      </div>
    </q-toolbar>
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
      <div class="column col">
        <div class="col text-right flex no-wrap items-center relative-position" style="padding: 0 2rem">
          <q-slider class="cursor-pointer" color="white" v-model="progress"/>
          <span class="q-pa-sm">{{formattedTime(elapsedTime)}}/{{formattedTime(duration)}}</span>
        </div>
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
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';

  export default defineComponent({
    // name: 'ComponentName'
    data() {
      return {
        tick: 0,
        theFilter: ''
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
      },
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
<style lang="scss">
  $trackH: 6px;

  .q-slider__track-container--h {
    margin-top: -$trackH/2;
    height: $trackH;
  }
</style>
