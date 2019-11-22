export const mutations = {
  LOAD: (state, { contactFields }) => {
    state.contactFields = contactFields;
    state.loading = false;
  }
};
