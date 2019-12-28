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

  it('should translate header', () => {
    sinon.stub(Api.prototype, 'getContactFields').resolves([]);

    const { component } = createComponent(App);

    expect(component.find('h1').text()).to.eql('Overview');
  });

  it('should modify header based on flipper', () => {
    sinon.stub(Api.prototype, 'getContactFields').resolves([]);

    const { component } = createComponent(App, { state: { flippers: ['ui_redesign_basics'] } });

    expect(component.find('h1').text()).to.eql('Overview _redesigned');
  });
});
