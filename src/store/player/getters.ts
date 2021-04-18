import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PlayerStateInterface, RepeatMode } from './state';

const getters: GetterTree<PlayerStateInterface, StateInterface> = {
  title(context): string {
    let title = '';
    if (context.currentSong !== undefined) {
      title = context.currentSong.title;
    }
    return title;
  },
  author(context): string {
    let author = '';
    if (context.currentSong) {
      author = context.currentSong.author;
    }
    return author;
  },
  repeatStyle(context): { [index: string]: string } {
    let icon = 'repeat';
    let iconClass = '';
    if (context.repeatMode > RepeatMode.NONE) {
      iconClass = 'text-primary';
    }
    if (context.repeatMode === RepeatMode.SINGLE) {
      icon = 'repeat_one';
    }
    return {
      icon: icon,
      class: iconClass
    };
  }
};

export default getters;
