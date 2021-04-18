import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

import api from 'src/store/api';
import { ApiStateInterface } from 'src/store/api/state';
import player from './player';
import { PlayerStateInterface } from 'src/store/player/state';
import playlist from './playlist';
import { PlaylistStateInterface } from 'src/store/playlist/state';

export interface StateInterface {
  api: ApiStateInterface,
  player: PlayerStateInterface,
  playlist: PlaylistStateInterface
}

export default store(function({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      api,
      player,
      playlist
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  });

  return Store;
});
