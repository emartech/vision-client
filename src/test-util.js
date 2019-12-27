import { createLocalVue, shallowMount, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import sinon from 'sinon';
import { Logger } from '@emartech/client-logger';
import { storeFactory } from './store';
import { routerFactory } from './router';
import { translationFactory } from './translation';

export const createComponent = (ComponentClass, options = { shallow: true }) => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  localVue.use(VueI18n);

  const store = storeFactory();
  const router = routerFactory();
  const i18n = translationFactory({ language: 'en' }, {});

  const component = options.shallow ?
    shallowMount(ComponentClass, { localVue, store, router, i18n }) :
    mount(ComponentClass, { localVue, store, router, i18n });

  return { component, localVue, store, router };
};

export const stubLogger = () => {
  const loggerInfo = sinon.stub(Logger.prototype, 'info');
  const loggerWarning = sinon.stub(Logger.prototype, 'warning');
  const loggerFromError = sinon.stub(Logger.prototype, 'fromError');

  return { loggerInfo, loggerWarning, loggerFromError };
};

export const stubConsole = () => {
  const consoleInfo = sinon.stub(console, 'info');
  const consoleWarn = sinon.stub(console, 'warn');
  const consoleError = sinon.stub(console, 'error');

  return { consoleInfo, consoleWarn, consoleError };
};
