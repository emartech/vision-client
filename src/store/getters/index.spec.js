import { expect } from 'chai';
import { getters } from './index';

describe('Getters', function() {
  it('contactFieldsCount should return number of contact fields', function() {
    const state = { contactFields: [] };

    const count = getters.contactFieldsCount(state);

    expect(count).to.eql(0);
  });
});
