import { MutationTree } from 'vuex';
import { PlaylistStateInterface } from './state';

const mutation: MutationTree<PlaylistStateInterface> = {
  toggleRepeat(state: PlaylistStateInterface) {
    state.repeatMode = (state.repeatMode + 1) % 3;
  },
  toggleShuffle(state: PlaylistStateInterface) {
    state.shuffle = !state.shuffle;
  }
};

export default mutation;
