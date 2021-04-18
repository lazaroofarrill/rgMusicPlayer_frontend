import { MutationTree } from 'vuex';
import { PlayerStateInterface } from './state';
import { Howl } from 'howler';


const mutation: MutationTree<PlayerStateInterface> = {
  loadPlayer(state: PlayerStateInterface, payload) {
    state.player = payload;
  },
  mutateCurrentSong(state: PlayerStateInterface, payload: number) {
    state.player.unload();
    const oldVol = state.player.volume();
    state.currentSong = payload;
    state.player = new Howl({ src: [`/api/play/${state.currentSong}`], format: ['mp3'] });
    state.player.volume(oldVol);
    state.player.once('load', () => {
      state.player.play();
    });
  },
  togglePlaying(state: PlayerStateInterface) {
    if (state.player.playing()) {
      state.player.pause();
    } else {
      console.log('playing', state.currentSong);
      state.player.play();
    }
  },
  changeVolume(state: PlayerStateInterface, payload: number) {
    state.player.volume(payload);
  },
  updateProgress(state: PlayerStateInterface, payload: number) {
    state.player;
    state.player.seek(payload / 100 * state.player.duration());
  }
};

export default mutation;