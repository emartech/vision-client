import { expect } from 'chai';
import { mutations } from './index';

describe('Mutations', () => {
  describe('#load', () => {
    it('load should set contact fields and stop loading', () => {
      const state = {};

      mutations.load(state, { contactFields: [] });

      expect(state).to.eql({ contactFields: [], loading: false });
    });
  });
});
