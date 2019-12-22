import { expect } from 'chai';
import { getters } from './index';

describe('Getters', () => {
  describe('#contactFieldsCount', () => {
    it('contactFieldsCount should return number of contact fields', () => {
      const state = { contactFields: [] };

      const count = getters.contactFieldsCount(state);

      expect(count).to.eql(0);
    });
  });
});
