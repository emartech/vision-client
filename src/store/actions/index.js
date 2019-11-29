export const actions = {
  onLoad: ({ commit }) => commit(
    'load',
    {
      contactFields: [
        { id: 1, name: 'First Name', application_type: 'text' },
        { id: 2, name: 'Last Name', application_type: 'text' },
        { id: 3, name: 'Email', application_type: 'text' }
      ]
    }
  )
};
