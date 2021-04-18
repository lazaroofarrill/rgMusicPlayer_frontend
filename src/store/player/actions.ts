import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PlayerStateInterface } from './state';
import { api } from 'boot/axios';

const actions: ActionTree<PlayerStateInterface, StateInterface> = {};

export default actions;
