import { expect } from 'chai';
import { getters } from './index';

describe('Getters', () => {
  describe('#flipperOn', () => {
    it('should return true for set flipper', () => {
      const state = { flippers: ['ui_redesign_basics'] };

      const flipperOn = getters.flipperOn(state);

      expect(flipperOn('ui_redesign_basics')).to.eql(true);
    });

    it('should return false for not set flipper', () => {
      const state = { flippers: ['ui_redesign_basics'] };

      const flipperOn = getters.flipperOn(state);

      expect(flipperOn('ui_redesign_invalid')).to.eql(false);
    });
  });

  describe('#flipperOff', () => {
    it('should return true for set flipper', () => {
      const state = { flippers: ['ui_redesign_basics'] };

      const flipperOff = getters.flipperOff(state);

      expect(flipperOff('ui_redesign_basics')).to.eql(false);
    });

    it('should return false for not set flipper', () => {
      const state = { flippers: ['ui_redesign_basics'] };

      const flipperOff = getters.flipperOff(state);

      expect(flipperOff('ui_redesign_invalid')).to.eql(true);
    });
  });
});
