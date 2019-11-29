import { expect } from 'chai';
import sinon from 'sinon';
import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { storeBaseFactory, storeFactory } from './store';

describe('Store', function() {
  beforeEach(function() {
    createLocalVue().use(Vuex);
  });

  it('should create empty store', function() {
    const store = storeBaseFactory();

    expect(store.state.loading).to.eql(true);
    expect(store.state.contactFields).to.eql([]);
  });

  it('should create empty store with returned config and auth token', async function() {
    const emarsys = {
      utils: {
        getConfig: sinon.stub(),
        getAuthenticationToken: sinon.stub()
      }
    };
    emarsys.utils.getConfig.resolves({ customerId: 100 });
    emarsys.utils.getAuthenticationToken.resolves('token');

    const store = await storeFactory(emarsys);

    expect(store.state.loading).to.eql(true);
    expect(store.state.contactFields).to.eql([]);
    expect(store.state.customerId).to.eql(100);
    expect(store.state.authToken).to.eql('token');
  });

  it('should trigger load event and set up state', function() {
    const store = storeBaseFactory();

    store.dispatch('onLoad');

    expect(store.state.loading).to.eql(false);
    expect(store.state.contactFields).to.eql([
      { id: 1, name: 'First Name', application_type: 'text' },
      { id: 2, name: 'Last Name', application_type: 'text' },
      { id: 3, name: 'Email', application_type: 'text' }
    ]);
  });
});
