import axios from 'axios';
import sinon from 'sinon';
import { expect } from 'chai';
import { Api } from './api';
import { stubLogger } from '../../test-util';

const createApi = customerId => {
  const contactFields = [
    { id: 3, name: 'Email', application_type: 'longtext' }
  ];
  const api = new Api(customerId);
  const axiosGet = sinon.stub(axios, 'get');

  return { api, contactFields, axiosGet, ...stubLogger() };
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

    it('should log request', async () => {
      const { api, contactFields, axiosGet, loggerInfo } = createApi(1);
      axiosGet.resolves({
        data: {
          general: contactFields
        }
      });

      await api.getContactFields();

      expect(loggerInfo).to.have.been.calledWith('get_contact_fields');
    });

    it('should log request failure', async () => {
      const { api, axiosGet, loggerFromError } = createApi(1);
      const error = new Error('request failed');
      axiosGet.rejects(error);

      try {
        await api.getContactFields();
        throw new Error('should throw');
      } catch (e) {
        expect(e.message).to.eql('request failed');
        expect(loggerFromError).to.have.been.calledWith('get_contact_fields', error);
      }
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
