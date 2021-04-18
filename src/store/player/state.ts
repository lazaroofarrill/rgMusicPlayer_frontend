import { Howl } from 'howler';


export interface PlayerStateInterface {
  currentSong: number,
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
    currentSong: 9,
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
