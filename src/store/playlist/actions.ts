import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PlaylistStateInterface } from './state';

const actions: ActionTree<PlaylistStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
