import { expect } from 'chai';
import sinon from 'sinon';
import App from './app.vue';
import { createComponent } from '../../test-util';
import { Api } from '../../lib/api/api';

describe('App', () => {
  it('should load contact list', () => {
    sinon.stub(Api.prototype, 'getContactFields').resolves([]);

    createComponent(App);

    expect(Api.prototype.getContactFields).to.have.been.calledWith();
  });
});
