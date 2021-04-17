<template>
  <q-page class="bg-black relative-position" padding>
    <!-- content -->
    <div class="absolute-top-left" style="width: 100%; height: 100%">
      <q-virtual-scroll :items="$store.state.api.songs"
                        :virtual-scroll-item-size="48"
                        :virtual-scroll-sticky-size-end="32"
                        :virtual-scroll-sticky-size-start="48"
                        style="height: 100%"
                        type="table">
        <template v-slot:before>
          <thead>
          <td v-for="col in columns">{{col}}</td>
          </thead>
        </template>
        <template v-slot="{item: row, index}">
          <!--          <q-item clickable>-->
          <tr :key="index">
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
    // name: 'PageName',
    data() {
      return {
        columns: [
          'title',
          'author'
          // 'path'
        ]
      };
    }
  });
</script>
<style lang="scss">
  /* Stylus Properties */
  .q-table-container {
    height: 100% !important /* filling 100% of window vertical measure */
  }

  .q-table-middle {
    height: 100%
  }
</style>
