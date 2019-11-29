export const mutations = {
  load: (state, { contactFields }) => {
    state.contactFields = contactFields;
    state.loading = false;
  }
};
