import { expect } from 'chai';
import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { storeFactory } from './index';

describe('Store', function() {
  beforeEach(function() {
    createLocalVue().use(Vuex);
  });

  it('should create empty store', function() {
    const store = storeFactory();

    expect(store.state.loading).to.eql(true);
    expect(store.state.contactFields).to.eql([]);
  });

  it('should trigger load event and set up state', function() {
    const store = storeFactory();

    store.dispatch('onLoad');

    expect(store.state.loading).to.eql(false);
    expect(store.state.contactFields).to.eql([
      { id: 1, name: 'First Name', application_type: 'text' },
      { id: 2, name: 'Last Name', application_type: 'text' },
      { id: 3, name: 'Email', application_type: 'text' }
    ]);
  });
});
