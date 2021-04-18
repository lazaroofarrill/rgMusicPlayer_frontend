import { Howl } from 'howler';
import { Song } from 'src/store/api/state';


export interface PlayerStateInterface {
  currentSong: Song,
  timeElapsed: number,
  trackDuration: number,
  startedAt: number | null,
  pausedAt: number | null,
  player: Howl,
  isPlaying: boolean,
  volume: number
}

function state(): PlayerStateInterface {
  return {
    currentSong: { id: -1, title: '', author: '', path: '' },
    timeElapsed: 0,
    trackDuration: 0,
    startedAt: null,
    pausedAt: null,
    player: new Howl({ src: [''] }),
    isPlaying: false,
    volume: 0.5
  };
}

export default state;
