import { expect } from 'chai';
import sinon from 'sinon';
import { actions } from './index';

describe('Actions', function() {
  it('onLoad should trigger load mutation with contact fields', function() {
    const state = { commit: sinon.stub() };

    actions.onLoad(state);

    expect(state.commit).to.have.been.calledWith(
      'load',
      {
        contactFields: [
          { id: 1, name: 'First Name', application_type: 'text' },
          { id: 2, name: 'Last Name', application_type: 'text' },
          { id: 3, name: 'Email', application_type: 'text' }
        ]
      }
    );
  });
});
