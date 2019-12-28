import Vuex from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

const baseState = { contactFields: [], loading: true, flippers: [] };

export const storeFactory = (config = {}, authToken = '') => {
  const state = { ...baseState, ...config, authToken };
  return new Vuex.Store({ state, actions, mutations, getters });
};
