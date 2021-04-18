import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PlayerStateInterface } from './state';

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
  }
};

export default getters;
