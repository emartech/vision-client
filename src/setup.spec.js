import Vue from 'vue';
import chai from 'chai';
import sinonChai from 'sinon-chai';

chai.should();
chai.use(sinonChai);

Vue.config.ignoredElements = [/^e-/];
