import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import App from './components/app/app.vue';
import { storeFactory, getConfigs } from './store';
import { loggerFactory } from './logger';
import { translationFactory } from './translation';
import { routerFactory } from './router';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.config.productionTip = false;
const logger = loggerFactory('app');

getConfigs(window.e)
  .then(([customerConfig, authToken, translations]) => {
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
