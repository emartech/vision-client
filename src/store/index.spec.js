import { expect } from 'chai';
import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import sinon from 'sinon';
import { storeFactory } from './index';
import { Api } from '../lib/api/api';

const setupStore = () => {
  createLocalVue().use(Vuex);
  const store = storeFactory();
  const getContactFieldsStub = sinon.stub(Api.prototype, 'getContactFields');

  return { store, getContactFieldsStub };
};

describe('Store', () => {
  it('should create empty store', () => {
    const { store } = setupStore();

    expect(store.state.loading).to.eql(true);
    expect(store.state.contactFields).to.eql([]);
  });

  it('should trigger load event and set up state', async () => {
    const { store, getContactFieldsStub } = setupStore();
    getContactFieldsStub.resolves([
      { id: 3, name: 'Email', application_type: 'longtext' }
    ]);

    await store.dispatch('onLoad');

    expect(store.state.loading).to.eql(false);
    expect(store.state.contactFields).to.eql([
      { id: 3, name: 'Email', application_type: 'longtext' }
    ]);
  });
});
