import axios from 'axios';
import { loggerFactory } from '../../logger';
const logger = loggerFactory('api');

export class Api {
  _customerId;

  static create(customerId) {
    return new Api(customerId);
  }

  constructor(customerId) {
    this._customerId = customerId;
  }

  async getContactFields() {
    try {
      const response = await axios.get(`/customer/${this._customerId}/sources/contact`);
      logger.info('get_contact_fields');

      return response.data.general;
    } catch (error) {
      logger.fromError('get_contact_fields', error);
      throw error;
    }
  }
}
