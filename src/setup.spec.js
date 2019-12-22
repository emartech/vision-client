import Vue from 'vue';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.should();
chai.use(sinonChai);

Vue.config.ignoredElements = [/^e-/];

afterEach(async function() {
  sinon.restore();
});
