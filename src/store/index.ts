import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

import api from 'src/store/api';
import { ApiStateInterface } from 'src/store/api/state';
import player from './player';
import { PlayerStateInterface } from 'src/store/player/state';

export interface StateInterface {
  api: ApiStateInterface,
  player: PlayerStateInterface,
}

export default store(function({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      api,
      player,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  });


  return Store;
});
