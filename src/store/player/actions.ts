import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PlayerStateInterface } from './state';

const actions: ActionTree<PlayerStateInterface, StateInterface> = {
  playSong(context, payload) {
    context.commit('updatePlaylist', payload);
    context.dispatch('playNext');
  },
  playNext(context) {
    let pl = context.state.playList;
    if (pl.length > 0) {
      context.commit('mutateCurrentSong', pl.filter(x => x.id === context.state.currentSongIndex)[0]);
      context.state.player.once('end', () => {
        context.dispatch('playNext');
      });
    }
    context.commit('dequeue');
  }
};

export default actions;
