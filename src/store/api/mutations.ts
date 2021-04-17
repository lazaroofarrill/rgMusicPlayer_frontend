import { MutationTree } from 'vuex';
import { ApiStateInterface, Song } from './state';

const mutation: MutationTree<ApiStateInterface> = {
  updateSongs ( state: ApiStateInterface, payload: Song[] ) {
    state.songs = payload
  }
};

export default mutation;
