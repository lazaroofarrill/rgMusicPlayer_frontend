<template>
  <q-page class="relative-position" padding>
    <div class="absolute-top-left" style="height: 100%; width: 100%">
      <q-table :columns="columns" :data="$store.state.api.songs" :pagination.sync="pagination"
               :table-colspan="3" class="my-sticky-header-table" dense flat
               hide-pagination row-key="id" style="max-height: 100%"
               virtual-scroll>
        <template v-slot:body="props">
          <q-tr :props="props" @dblclick="logDouble($event ,props.row)">
            <q-td :key="c.name" v-for="c in columns">
              {{props.row[c.field]}}
            </q-td>
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
      logDouble(events: Event, row: Song) {
        this.$store.commit('player/mutateCurrentSong', row);
      },
      logSingle() {
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
