<template>
  <q-page class="bg-black relative-position" padding>
    <!-- content -->
    <div class="absolute-top-left" style="width: 100%; height: 100%">
      <q-virtual-scroll :items="$store.state.api.songs"
                        :virtual-scroll-item-size="48"
                        :virtual-scroll-sticky-size-end="32"
                        :virtual-scroll-sticky-size-start="48"
                        style="height: 100%; border-radius: 0"
                        type="table">
        <template v-slot:before>
          <thead class="thead-custom-sticky">
          <tr>
            <td v-for="col in columns">{{col}}</td>
          </tr>
          </thead>
        </template>
        <template v-slot="{item: row, index}">
          <!--          <q-item clickable>-->
          <tr :key="index" @dblclick="logDouble(row.id)">
            <!--            <td>#{{index}}</td>-->
            <td :key="index + '-' + col" v-for="col in columns">
              {{row[col]}}
            </td>
            <q-menu context-menu touch-position>
              <q-list>
                <q-item clickable v-close-popup>{{row.id}}</q-item>
              </q-list>
            </q-menu>
          </tr>

          <!--          </q-item>-->
        </template>
      </q-virtual-scroll>
    </div>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';

  export default defineComponent({
    data() {
      return {
        columns: [
          'title',
          'author'
          // 'path'
        ]
      };
    },
    methods: {
      logDouble(id: number) {
        this.$store.commit('player/mutateCurrentSong', id);
      },
      logSingle() {
      }
    }
  });
</script>
<style lang="scss">
  .thead-custom-sticky tr > * {
    position: sticky;
    opacity: 1;
    z-index: 1;
    background-color: white;
  }

  .thead-custom-sticky tr:last-child > * {
    top: 0;
  }

  .tfoot-custom-sticky tr:first-child > * {
    bottom: 0
  }
</style>
