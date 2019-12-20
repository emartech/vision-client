import { createLocalVue, shallowMount, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
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
