import { Howl } from 'howler';
import { Song } from 'src/store/api/state';

export enum RepeatMode {
  NONE, ALL, SINGLE
}

export interface PlayerStateInterface {
  playList: Song[],
  ogPlaylist: Song[],
  repeatMode: RepeatMode,
  shuffle: boolean
  currentSong: Song,
  currentSongIndex: number,
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
    currentSongIndex: 0,
    ogPlaylist: [],
    playList: [], repeatMode: RepeatMode.NONE, shuffle: false,
    currentSong: { id: -1, title: '', author: '', path: '' },
    timeElapsed: 0,
    trackDuration: 0,
    startedAt: null,
    pausedAt: null,
    player: new Howl({ src: [''], volume: 1 }),
    isPlaying: false,
    volume: 0.5
  };
}

export default state;
