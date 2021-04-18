import { MutationTree } from 'vuex';
import { PlayerStateInterface } from './state';
import { Howl } from 'howler';
import { Song } from 'src/store/api/state';


const mutation: MutationTree<PlayerStateInterface> = {
  loadPlayer(state: PlayerStateInterface, payload) {
    state.player = payload;
  },
  mutateCurrentSong(state: PlayerStateInterface, payload: Song) {
    state.player.unload();
    const oldVol = state.player.volume();
    state.currentSong = Object.assign({}, state.currentSong, payload);
    state.player = new Howl({ src: [`/api/play/${state.currentSong.id}`], format: ['mp3'], volume: oldVol });
    state.player.once('load', () => {
      state.player.play();
    });
  },
  togglePlaying(state: PlayerStateInterface) {
    if (state.player.playing()) {
      state.player.pause();
    } else {
      state.player.play();
    }
  },
  changeVolume(state: PlayerStateInterface, payload: number) {
    state.player.volume(payload);
  },
  updateProgress(state: PlayerStateInterface, payload: number) {
    state.player;
    state.player.seek(payload / 100 * state.player.duration());
  },
  toggleRepeat(state: PlayerStateInterface) {
    state.repeatMode = (state.repeatMode + 1) % 3;
  },
  toggleShuffle(state: PlayerStateInterface) {
    state.shuffle = !state.shuffle;
  },
  updatePlaylist(state: PlayerStateInterface, payload) {
    state.playList = JSON.parse(JSON.stringify(payload.playList));
    state.currentSongIndex = payload.songId;
  },
  dequeue(state: PlayerStateInterface) {
    let nextSong = state.playList.findIndex(x => x.id === state.currentSongIndex);
    if (nextSong === state.playList.length - 1) {
      nextSong = 0;
    } else {
      nextSong++;
    }
    state.currentSongIndex = state.playList[nextSong].id;
  }
};

export default mutation;
