import Vuex from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';
import { config } from '../config';

const baseState = { contactFields: [], loading: true };
export const storeFactory = emarsys => {
  return Promise
    .all([
      emarsys.utils.getConfig(),
      emarsys.utils.getAuthenticationToken(config.serviceName)
    ])
    .then(([config, authToken]) => {
      const state = { ...baseState, ...config, authToken };
      return new Vuex.Store({ state, actions, mutations, getters });
    });
};
