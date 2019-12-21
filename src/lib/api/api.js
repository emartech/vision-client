import axios from 'axios';

export class Api {
  _customerId;

  static create(customerId) {
    return new Api(customerId);
  }

  constructor(customerId) {
    this._customerId = customerId;
  }

  getContactFields() {
    return axios
      .get(`/customer/${this._customerId}/sources/contact`)
      .then(response => response.data)
      .then(contactFields => contactFields.general);
  }
}
