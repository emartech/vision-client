import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import axios from 'axios';
import App from './components/app/app.vue';
import { storeFactory } from './store';
import { loggerFactory } from './logger';
import { translationFactory } from './translation';
import { routerFactory } from './router';
import { config } from './config';
import { configFactory } from './config/factory';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.config.productionTip = false;
const logger = loggerFactory('app');

configFactory(window.e)
  .then(([customerConfig, authToken, translations]) => {
    axios.defaults.baseURL = config.serviceUrl;
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + authToken; // eslint-disable-line dot-notation

    return new Vue({
      store: storeFactory(customerConfig, authToken),
      router: routerFactory(),
      i18n: translationFactory(customerConfig, translations),
      render: h => h(App)
    }).$mount('#app');
  })
  .then(() => logger.info('start'))
  .catch(error => {
    logger.fromError('start', error);
    console.error(error);
  });
