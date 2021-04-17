import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ApiStateInterface } from './state';

import axios from 'axios';

const actions: ActionTree<ApiStateInterface, StateInterface> = {
  updateSongs(context) {
    axios.get('/api/songs').then(response => {
      context.commit('updateSongs', response.data);
    });
  }
};

export default actions;
