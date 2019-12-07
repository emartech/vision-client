import Vuex from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';
import { config } from '../config';

const baseState = { contactFields: [], loading: true };

export const storeFactory = (config = {}, authToken = '') => {
  const state = { ...baseState, ...config, authToken };
  return new Vuex.Store({ state, actions, mutations, getters });
};

export const getConfigs = emarsys => Promise
  .all([
    emarsys.utils.getConfig(),
    emarsys.utils.getAuthenticationToken(config.serviceName),
    emarsys.utils.getTranslation(config.serviceName)
  ]);
