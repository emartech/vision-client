import VueRouter from 'vue-router';
import ContactFieldList from '../components/contact-field-list/contact-field-list.vue';

const routes = [
  { path: '/', component: ContactFieldList },
  { path: '*', component: ContactFieldList }
];

export const routerFactory = () => new VueRouter({ routes });
