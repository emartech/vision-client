import { expect } from 'chai';
import { mutations } from './index';

describe('Mutations', function() {
  it('load should set contact fields and stop loading', function() {
    const state = {};

    mutations.load(state, { contactFields: [] });

    expect(state).to.eql({ contactFields: [], loading: false });
  });
});
