import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PlaylistStateInterface } from './state';
import { RepeatMode } from './state';

export interface RepStyle {
  icon: string,
  class: string
}

const getters: GetterTree<PlaylistStateInterface, StateInterface> = {
  repeatStyle(context): RepStyle {
    let rp = context.repeatMode;
    let i = 'repeat';
    let c = '';
    // noinspection FallThroughInSwitchStatementJS
    switch (rp) {
      case RepeatMode.NONE:
        break;
      case RepeatMode.SINGLE:
        i = 'repeat_one';
      case RepeatMode.ALL:
        c = 'text-primary';
    }
    return {
      icon: i,
      class: c
    };
  }
};

export default getters;
