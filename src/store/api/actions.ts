import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ApiStateInterface } from './state';

import axios from 'axios';

const actions: ActionTree<ApiStateInterface, StateInterface> = {
  updateSongs(context) {
    axios.get('/api/songs').then(response => {
      context.commit('updateSongs', response.data);
    });
  },
  search(context, query: string) {
    axios.get(`/api/songs/search?q=${query}`).then(response => {
      context.commit('updateSongs', response.data);
    });
  }
};

export default actions;
