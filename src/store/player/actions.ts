import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PlayerStateInterface, RepeatMode } from './state';
import { Song } from 'src/store/api/state';

const actions: ActionTree<PlayerStateInterface, StateInterface> = {
  playSong(context, payload) {
    context.commit('updatePlaylist', payload);
    context.dispatch('playNext').then();
  },
  skipNext(context) {
    context.commit('moveNext');
    context.dispatch('playNext');
  },
  skipPrev(context) {
    context.commit('movePrev');
    context.dispatch('playNext');
  },
  playNext(context) {
    let pl = context.state.playList;
    if (pl.length > 0) {
      context.commit('mutateCurrentSong', pl.filter(x => x.id === context.state.currentSongIndex)[0]);
      context.state.player.once('end', () => handleEnd(context));
    }
  },
  toggleRepeat(context) {
    context.commit('toggleRepeat');
    if (context.state.repeatMode !== RepeatMode.NONE) {
      context.state.player.once('end', () => handleEnd(context));
    }
  },
  enqueue(context, payload: Song) {
    context.commit('enqueue', payload);
  }
};

export default actions;

function handleEnd(context: any) {
  if (context.state.repeatMode !== RepeatMode.SINGLE)
    context.commit('moveNext');
  context.dispatch('playNext').then();
}
