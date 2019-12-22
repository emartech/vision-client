import axios from 'axios';
import sinon from 'sinon';
import { expect } from 'chai';
import { Api } from './api';

const createApi = customerId => {
  const contactFields = [
    { id: 3, name: 'Email', application_type: 'longtext' }
  ];
  const api = new Api(customerId);
  const axiosGet = sinon.stub(axios, 'get');

  return { api, contactFields, axiosGet };
};

describe('Api', () => {
  describe('#getContactFields', () => {
    it('should transform response', async () => {
      const { api, contactFields, axiosGet } = createApi(1);
      axiosGet.resolves({
        data: {
          general: contactFields
        }
      });

      const result = await api.getContactFields();

      expect(result).to.eql(contactFields);
    });

    it('should call proper endpoint', async () => {
      const { api, contactFields, axiosGet } = createApi(1);
      axiosGet.resolves({
        data: {
          general: contactFields
        }
      });

      await api.getContactFields();

      expect(axiosGet).to.have.been.calledWith('/customer/1/sources/contact');
    });
  });
});
