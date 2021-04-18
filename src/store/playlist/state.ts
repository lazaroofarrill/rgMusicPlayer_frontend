import { Song } from 'src/store/api/state';

export enum RepeatMode {
  NONE, ALL, SINGLE
}

export interface PlaylistStateInterface {
  songs: Song[];
  repeatMode: RepeatMode,
  shuffle: boolean
}

function state(): PlaylistStateInterface {
  return {
    shuffle: false,
    songs: [],
    repeatMode: RepeatMode.NONE
  };
}

export default state;
