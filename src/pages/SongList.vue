<template>
  <q-page class="relative-position" padding>
    <div class="absolute-top-left" style="height: 100%; width: 100%">
      <q-table :columns="columns" :data="$store.state.api.songs" :pagination.sync="pagination"
               :selected.sync="selected" :table-colspan="3" class="my-sticky-header-table" dense
               flat hide-pagination hide-selected-banner row-key="id" selection="single" style="max-height: 100%"
               virtual-scroll>
        <template v-slot:body="props">
          <q-tr :props="props" @click="select(props)" @contextmenu="select(props)"
                @dblclick="logDouble($event ,props.row)">
            <q-td/>
            <q-td :key="c.name" v-for="c in columns">
              {{props.row[c.field]}}
            </q-td>
            <q-menu class="bg-blue" context-menu>
              <q-list style="width: 200px">
                <q-item @click="$store.commit('player/enqueue', props.row)" clickable dense v-close-popup v-ripple>
                  <div class="flex no-wrap items-center q-gutter-sm">
                    <q-icon name="play_arrow"/>
                    <span>Play next</span>
                  </div>
                </q-item>
              </q-list>
            </q-menu>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { Song } from 'src/store/api/state';

  export default defineComponent({
    data() {
      return {
        selected: [],
        columns: [
          { name: 'title', label: 'Title', field: 'title', sortable: true, align: 'left' },
          { name: 'author', label: 'Author', field: 'author', sortable: true, align: 'left' }
        ],
        pagination: {
          rowsPerPage: 0
        }
      };
    },
    methods: {
      select(props: any) {
        props.selected = true;
        if (this.selected.length === 0) {
          console.log('hello');
        }
      },
      logDouble(events: Event, row: Song) {
        let songs = this.$store.state.api.songs;
        let payload = {
          songId: row.id,
          playList: songs
        };
        this.$store.dispatch('player/playSong', payload);
      }
    }
  });
</script>
<style lang="scss">
  .my-sticky-header-table {
    .q-table-top,
    thead tr:first-child th {
      /*color: white;*/
      background-color: white;
    }

    thead tr th {
      position: sticky;
      z-index: 1;
    }

    thead tr:last-child th {
      top: 0
    }
  }

  .q-table-container {
    box-shadow: none;
  }
</style>
