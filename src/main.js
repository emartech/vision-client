import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/app.vue';
import { storeFactory } from './store';

Vue.use(Vuex);
Vue.config.productionTip = false;

storeFactory(window.e)
  .then(store => new Vue({ store, render: h => h(App) }).$mount('#app'))
  .then(() => console.log('Application vue-example started'))
  .catch(error => console.error('Application vue-example crashed', error));
