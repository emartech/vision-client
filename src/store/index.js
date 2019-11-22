import Vuex from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

const baseState = { contactFields: [], loading: true };
export const storeFactory = emarsys => {
  return Promise
    .all([
      emarsys.utils.getConfig(),
      emarsys.utils.getAuthenticationToken('example-service')
    ])
    .then(([config, authToken]) => {
      const state = { ...baseState, ...config, authToken };
      return new Vuex.Store({ state, actions, mutations, getters });
    });
};
