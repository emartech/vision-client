import { Api } from '../../lib/api/api';

export const actions = {
  onLoad: async ({ state, commit }) => {
    const contactFields = await Api.create(state.customerId).getContactFields();
    commit('load', { contactFields });
  }
};
