import { expect } from 'chai';
import sinon from 'sinon';
import { actions } from './index';
import { Api } from '../../lib/api/api';

const setupStore = () => {
  const store = { commit: sinon.stub(), state: { customerId: 1 } };
  const getContactFieldsStub = sinon.stub(Api.prototype, 'getContactFields');

  return { store, getContactFieldsStub };
};

describe('Actions', () => {
  describe('#onLoad', () => {
    it('should trigger load mutation with contact fields', async () => {
      const { store, getContactFieldsStub } = setupStore();
      getContactFieldsStub.resolves([
        { id: 3, name: 'Email', application_type: 'longtext' }
      ]);

      await actions.onLoad(store);

      expect(store.commit).to.have.been.calledWith(
        'load',
        {
          contactFields: [
            { id: 3, name: 'Email', application_type: 'longtext' }
          ]
        }
      );
    });
  });
});
