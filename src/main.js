import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/app.vue';
import { storeFactory } from './store/store';
import { loggerFactory } from './logger';

Vue.use(Vuex);
Vue.config.productionTip = false;
const logger = loggerFactory('app');

storeFactory(window.e)
  .then(store => new Vue({ store, render: h => h(App) }).$mount('#app'))
  .then(() => logger.info('start'))
  .catch(error => logger.fromError('start', error));
